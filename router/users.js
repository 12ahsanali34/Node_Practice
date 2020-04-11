const express = require('express');
const router = express.Router();
const db = require('../config/database');
const UserModel = require('../models/users');

router.get('/users',(req, res) => {
    UserModel.findAll()
    .then(users=> {
        console.log(JSON.stringify(users), ' userss res')
        res.setHeader('Content-Type', 'application/json');
        res.status(200)
        res.send(JSON.stringify(users))
        res.end()
    })
    .catch(err=> console.log(err, ' Error res'))
})

module.exports = router;