require("dotenv").config();
const express = require("express");
const server = express();
const model = require('./model');
const db = require("../database/db-config");
const cors = require('cors');

console.log(process.env.NAME, process.env.ANOTHERNAME); //env variables
//middleware
server.use(express.json()); // parses the req.body
server.use(cors());

server.get('/', (req, res) => {
    res.send("Find API documentation here: ")
})

server.get('/api', (req, res) => {
    const perPage = req.query.perPage;
    const skip = req.query.skip;
    const table = req.query.table;
    const where = req.query.where;
    const orderBy = req.query.orderBy;

    model.findAny(perPage, skip, table, where, orderBy).then(tableData => {
        res.json({ tableData });
    }).catch(error => {
        res.json({ error: `There was an error: ${error}` });
    });
});

server.delete('/api', (req, res) => {
    // console.log('delete', req.query)

    model.remove(req.query.table, req.query.where)
        .then(removed => {
            res.status(200).json('number of rows removed: ' + removed.rowCount);
        })
        .catch(error => {
            res.status(500).json(error + '');
        });
});


server.post('/api', (req, res) => {
    console.log('post', req.query)
    model.findBy(req.query.table, Users.makeWhere(req.body))
        .then(result => {
            if (typeof (result[0]) !== 'object') {
                Users.add(req.query.table, req.body)
                    .then(updated => {
                        res.status(201).json(updated.rows);
                    })
                    .catch(error => {
                        res.status(500).json(error + '');
                    });
            }
            else { res.status(201).json(result.rows) }
        })
        .catch(error => {
            res.status(500).json(error + '');
        });
});

server.put('/api', (req, res) => {
    console.log('put', req.query)
    model.update(req.query.table, req.query.where, req.body)
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
