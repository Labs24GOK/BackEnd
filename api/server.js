require('dotenv').config();

// ------- Imports --------
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const model = require('./model.js');
const initializePassport = require('../passport-config.js');
const createSession = require('../middleware/createSession.js');
const checkAuthenticated = require('../middleware/checkAuthenticated.js');

// ------- Set up server -------
const server = express();

// ------- Middleware --------
server.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);
server.use(express.json());
createSession(server);
initializePassport(passport);

// -------- Endpoints --------
server.post('/register', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    model
        .addUser({
            username: req.body.username,
            password: hashedPassword
        })
        .then(username => {
            res.status(201).json({
                message: `The user '${username}' has successfully been created!`
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `There was an error attempting to register user: ${error}.`
            });
        });
});

server.post(
    '/login',
    passport.authenticate('local', {
        session: true
    }),
    (req, res) => {
        if (req.isAuthenticated()) {
            res.status(200).json({ message: 'You have successfully logged in' });
        } else {
            res.status(500).json({ message: 'Invalid credentials' });
        }
    }
);

server.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.json({ message: 'bye' });
});

server.get('/user', (req, res) => {
    console.log('====USER====');
    if (req.user) {
        res.status(200).json({ authenticated: req.isAuthenticated(), username: req.user.username });
    } else {
        res.status(401).json({ authenticated: req.isAuthenticated(), username: undefined });
    }
});

server.get('/', (req, res) => {
    res.status(200).send('Find API documentation here: ');
});

server.get('/api', checkAuthenticated, (req, res) => {
    const perPage = req.query.perPage;
    const skip = req.query.skip;
    const table = req.query.table;
    const where = req.query.where;
    const orderBy = req.query.orderBy;

    model
        .findAny(perPage, skip, table, where, orderBy)
        .then(tableData => {
            res.json({ tableData });
        })
        .catch(error => {
            res.json({ error: `There was an error: ${error}` });
        });
    // res.status(200).json({ message: 'You were able to pass' });
});

server.delete('/api', (req, res) => {
    // console.log('delete', req.query)

    model
        .remove(req.query.table, req.query.where)
        .then(removed => {
            res.status(200).json('number of rows removed: ' + removed.rowCount);
        })
        .catch(error => {
            res.status(500).json(error + '');
        });
});

server.post('/api', (req, res) => {
    console.log('post', req.query);
    model
        .findBy(req.query.table, model.makeWhere(req.body))
        .then(result => {
            if (typeof result[0] !== 'object') {
                model
                    .add(req.query.table, req.body)
                    .then(updated => {
                        res.status(201).json(updated.rows);
                    })
                    .catch(error => {
                        res.status(500).json(error + '');
                    });
            } else {
                res.status(201).json(result.rows);
            }
        })
        .catch(error => {
            res.status(500).json(error + '');
        });
});

server.put('/api', (req, res) => {
    console.log('put', req.query);
    model
        .update(req.query.table, req.query.where, req.body)
        .then(updated => {
            res.status(201).json('updated ' + updated.rows);
        })
        .catch(error => {
            res.status(500).json(error + '');
        });
});

//http://localhost:3000/pagination?perPage=5&skip=10&table=students
// server.get("/pagination", async (req, res) => {
//     const perPage = req.query.perPage;
//     const skip = req.query.skip;
//     const table = req.query.table;
//     //es5
//     db(table)
//       .offset(skip)
//       .limit(perPage)
//       .then(tableData => {
//         res.json({ tableData });
//       });
//     //es6
//     const tableData = await db(table)
//       .offset(skip)
//       .limit(perPage);
//     res.json({ tableData });
//     try {
//       const tableData = await db(table)
//         .offset(skip)
//         .limit(perPage);
//       res.json({ tableData });
//     } catch (err) {
//       res.json({ err });
//     }
//   });

module.exports = server;
