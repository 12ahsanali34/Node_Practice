const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

db.authenticate()
.then(()=> console.log('Database connected...'))
.catch((err)=> console.log('Error: ', err))


const app = express();
app.use(bodyParser.json())

app.get(['/','/update','/get-user'], require('./router/users'))
app.post(['/add'], require('./router/users'))


const PORT = process.env.PORT || 8000

app.listen(PORT, console.log('Server is running on port :'+PORT))