const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

db.authenticate()
.then(()=> console.log('Database connected...'))
.catch((err)=> console.log('Error: ', err))


const app = express();

app.get('/',(req, res)=> res.send("INDEX"))

app.get('/users', require('./router/users'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log('Server is running on port :'+PORT))