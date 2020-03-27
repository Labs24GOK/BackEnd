const express = require('express');
const server = express();
const router = express.Router();
const model = require('../models/model');

const checkAuthenticated = require('../../middleware/checkAuthenticated');

// routes may not even be used by any front end 

//// NEED TO CHECK IF THERE ARE ANY OTHER ENDPOINTS ON THE FRONT END USING THIS ENDPOINTS AND REFACTORED INTO THEIR OWN ROUTES
router.get('/api', checkAuthenticated, (req, res) => {
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
  
  server.get('/where', checkAuthenticated, (req, res) => {
    model
      .find(req.query.table, req.query.where)
      .then(tableData => {
        tableData = tableData.rows;
        res.json({ tableData });
      })
      .catch(error => {
        res.json({ error: `There was an error: ${error}` });
      });
    // res.status(200).json({ message: 'You were able to pass' });
  });
  
  server.delete('/api', (req, res) => {
  
    model
      .remove(req.query.table, req.query.where)
      .then(removed => {
        res
          .status(200)
          .json(
            'number of rows removed: ' + removed.rowCount
          );
      })
      .catch(error => {
        res.status(500).json(error + '');
      });
  });
  
  server.post('/api', (req, res) => {
    //console.log('post', req.query);
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
    //console.log('put', req.query);
    model
      .update(req.query.table, req.query.where, req.body)
      .then(updated => {
        res.status(201).json(req.body);
      })
      .catch(error => {
        res.status(500).json(error + '');
      });
  });
  
  server.put('/', (req, res) => {
    //console.log('put', req.query);
    model
      .updateAny(req.query.table, req.query.where, req.body)
      .then(updated => {
        res.status(201).json(req.body);
      })
      .catch(error => {
        res.status(500).json(error + '');
      });
  });



module.exports = router;