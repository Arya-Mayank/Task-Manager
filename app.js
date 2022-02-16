const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.end("Hello")
})

app.use('/api/v1/tasks', tasks);


// listen
const port = 3000;

// wait for connection to the db to be established.
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        // if connection is established, then spin up the server
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()