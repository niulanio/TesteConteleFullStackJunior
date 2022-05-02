
const Error = require('../errors/AppErros');
const knex = require('../dataBase/conectDataBase');
const { validateEmail } = require('../helpers/validateEmail');
const { bcryptHash } = require('../helpers/bcrypt');

module.exports = {

    async getUsers(req, res, next) {
        const usersList = await knex('users').select('*');
        try {
            return res.status(200).json(usersList);
        } catch (error) {
            return next(error.detail);
        }
    },

    async getUser(req, res, next) {
        const id = req.params.id;
        try {
            const usersList = await knex('users').select('*').where({ id });
            if (usersList.length === 0) {
                return next(new Error("User not found!", 404));
            }
            return res.status(200).json(usersList);
        } catch (error) {
            return next(error.detail);
        }
    },

    async createUser(req, res, next) {
        const { email, password } = req.body;
        const bcryptHashPassword = await bcryptHash(password);
        try {
            if (!validateEmail(email)) {
                return next(new Error("Invalid E-mail!", 400));
            }
            await knex('users').insert({ email, password: bcryptHashPassword });
            return res.status(201).send("OK");
        }
        catch (error) {
            return next(new Error(error.detail, 400));
        }
    },

    async updateUser(req, res, next) {
        const { id } = req.params;
        const { email, password } = req.body;
        const updated_at = new Date();
        try {
            let bcryptHashPassword;
            if (password) {
                bcryptHashPassword = await bcryptHash(password);
            }
            if (!validateEmail(email)) {
                return next(new Error("Invalid E-mail!", 400))
            }
            const updateUser = await knex('users')
                .update({
                    email,
                    password: bcryptHashPassword,
                    updated_at
                })
                .where({ id });
            if (updateUser === 0) {
                return next(new Error("User not found!", 404));
            }
            return res.status(201).send("OK");
        }
        catch (error) {
            return next(new Error(error.detail, 400));
        }
    },

    async deleteUsers(req, res, next) {
        try {
            await knex('users').del();
            return res.status(200).send("Todos os usuários foram deletados!");
        }
        catch (error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        const { id } = req.params;
        try {
            await knex('users').where({ id }).del();
            return res.status(200).send("O usuário foi deletado!");
        }
        catch (error) {
            next(error);
        }
    }

}
