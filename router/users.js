const express = require('express');
const router = express.Router();
const db = require('../config/database');
const UserModel = require('../models/users');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get('/',(req, res) => {
    UserModel.findAll()
    .then(users=> {
        res.setHeader('Content-Type', 'application/json');
        res.status(200)
        res.send(JSON.stringify(users))
        res.end()
    })
    .catch(err=> console.log(err, ' Error res'))
})

router.post('/add',(req, res) => {
    const { name, address } = req.body
    UserModel.create({
        name,
        address
    })
    .then(users=> {
        res.send({
            status:200,
            message:'user added.'
        })
        res.end()
    })
    .catch(err=> console.log(err, ' Error res'))
})

router.get('/update',(req, res) => {
    UserModel.update( 
        { name: req.query.name, address: req.query.address},
        { 
            where: { id: req.query.id }
        }
    )
    .then(users=> {
        res.send({
            status:200,
            message:'user updated.'
        })
        res.end()
    })
    .catch(err=> console.log(err, ' Error res'))
})

router.get('/get-user',(req, res) => {
    UserModel.findAll({
        attributes: ['name','address'],
        where: {
          id: req.query.id
        }
      })
    .then(users=> {
        let user = JSON.stringify(users)
        res.send(JSON.parse(user)[0])
        res.end()
    })
    .catch(err=> console.log(err, ' Error res'))
})

module.exports = router;