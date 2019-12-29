const express    = require('express');
const app        = express();

// Henter standard portnummer fra systemet, dersom den ikke klarer det, benytter den 3000 som standard.
const port = process.env.PORT || 3000;

// Registrerer mappen 'public' som sted for statiske filer på webserveren.
app.use('/styles', express.static('public/assets/styles'));
app.use('/scripts', express.static('public/assets/scripts'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header',
    'Origin, X-Request-With, Content-Type, Accept'
  );

  res.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.render('snake');
});

module.exports = app;
