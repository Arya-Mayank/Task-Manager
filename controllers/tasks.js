const Task = require('../models/tasks')

const getAllTasks = (req,res) => {
    res.send(`Get All Tasks`)
}

const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task);
}

const getSingleTask = (req,res) => {
    res.send(`Single task`);
}

const updateTask = (req,res) => {
    res.send(`task updated`);
}

const deleteTask = (req,res) => {
    res.send(`Task Deleted`);
}


module.exports = {
getAllTasks,
createTask,
getSingleTask,
updateTask, 
deleteTask
}