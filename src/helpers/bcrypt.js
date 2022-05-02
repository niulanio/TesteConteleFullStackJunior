const bcrypt = require('bcrypt');

const  bcryptHash = (password) => bcrypt.hash(password,5); 

module.exports = {bcryptHash}