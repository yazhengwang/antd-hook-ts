const express = require('express');

const app = express();
const router = require('./router');

app.use('/', router);

app.listen('3200',()=>{
    console.log('sever running at port 3200');
})