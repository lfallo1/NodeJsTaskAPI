const express = require('express');
require('dotenv').config();
const NotFound = require('./middleware/NotFound')
const ErrorHandler = require('./middleware/error-handler')

//connect to mongodb
const connect = require('./connect')

const tasksController = require('./controllers/tasksController')

const app = express();

//miiddleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasksController);

app.use(NotFound);
app.use(ErrorHandler);

const start = async () =>{
    try{
        await connect.connectDB(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}@cluster0.c7vl0.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
        console.log('Connected to mongodb')
        app.listen(5000, () => console.log('Server started'));
    } catch(err){
        console.log('Unable to connect to database: ' + err)
    }
}

start();