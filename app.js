const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// ===== Swagger Setup =====
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Tshirt API - Nandoz',
    version: '1.0.0',
    description: 'An API to Handle Nando Tshirt - Bottom Up Approach',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// ===== App Configuration =====
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // use pug instead of jade

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ===== Routes =====
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// ===== Error Handling =====
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  const isDev = req.app.get('env') === 'development';
  res.status(err.status || 500);
  res.format({
    html: () => res.render('error', { message: err.message, error: isDev ? err : {} }),
    json: () => res.json({ status: 'error', message: err.message, stack: isDev ? err.stack : undefined }),
  });
});

// ===== Start Server =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});

module.exports = app;
