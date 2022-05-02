
const express = require('express');
const cors = require('cors');

const swaggerUiExpress = require('swagger-ui-express');
const swaggerDocs = require('./src/swagger.json');

const routes = require('./src/routes/routes.js');
const AppError = require('./src/errors/AppErros');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/docs-api", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));
app.use('/api/v1', routes);
app.use(
  (error, req, res, next) => {     
    if (error instanceof AppError) {   
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);


app.listen(3000, () => console.log('Server is running on port 3000!'));