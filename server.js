// Calling dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = ('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.store);

const app = express();
// Setting the port the server will use
const PORT = provess.env.PORT || 3001;

// Setting up the handlesbars engine
const hbs = exphbs.create({ helpers });

// Setting up cookies
const sess = {
    // TODO: Fill in cookie information
};

app.use(session(sess));

app.engine('handlebars'. hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Syncing the database and then starting the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('The server has been started!'))
});