// import task schema model
const Task = require('../models/tasks')


const getAllTasks = async (req,res) => {
    try{
        // try to get all tasks back
        const tasks = await Task.find({}) 
        res.status(200).json({tasks})
    }
    catch(error){
        // send error message if unsuccessful
        res.status(500).json({msg:error.message})
    }
    
}

const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task);
    }
    catch (error){
        res.status(500).json({msg: error.message})
    }
}

const getSingleTask = async (req,res) => {
    try{
        // try to find one task with matching id
        const {id:taskID} = req.params;  // getting id from params as taskID
        const task = await Task.findOne({_id:taskID});
        if(!task){
            // if id syntax is same, and task is not found
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch(error){
        // if there is error with id syntax
        res.status(500).json({msg: error})
    }
    
}

const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;

                    // findOneAndUpdate({condition}, what to update with, options)

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,  //returns new data back as result
            runValidators:true // runs schema validator on update data
        });

        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    }
    catch(error){

    }
}

const deleteTask = async (req,res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg: error})
    }
    
}


module.exports = {
getAllTasks,
createTask,
getSingleTask,
updateTask, 
deleteTask
}