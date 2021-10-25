const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 3000;

app.use(morgan('dev'));

const STATIC_OPTIONS = {
  extensions: ['html'],
  redirect: false
}
app.use(express.static('dist', STATIC_OPTIONS));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})
