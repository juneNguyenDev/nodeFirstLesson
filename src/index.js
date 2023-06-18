const path = require('path');
const express = require('express');
var morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const port = 3000;
const route = require('./routes/index');
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
