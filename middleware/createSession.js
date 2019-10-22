const session = require('express-session');
const passport = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const db = require('../database/db-config');
const cookieParser = require('cookie-parser');

const store = new KnexSessionStore({
    tablename: 'sessions',
    sidfieldname: 'sid',
    knex: db,
    clearInterval: 1000 * 60 * 60 * 24,
    createtable: true
});

const sessionConfig = {
    secret: 'keyboard cat',
    resave: false,
    key: 'Bonafind',
    saveUninitialized: true,
    // cookie: { maxAge: 1000 * 60 * 60 },
    store: store
};

module.exports = server => {
    server.use(session(sessionConfig));
    server.use(cookieParser());
    server.use(passport.initialize());
    server.use(passport.session());
};
