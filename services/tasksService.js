const TaskModel = require('../models/TaskModel')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../exceptions/custom-error')

//GET all
const getTasks = asyncWrapper(async (req,res) => {
    const tasks = await TaskModel.find({})
    return res.status(200).json(tasks);
})

//GET byID
const getTaskByID = asyncWrapper(async (req,res,next) => {
    const task = await TaskModel.findOne({taskID: req.params.taskID});
    if (!task) {
        return next(createCustomError('Not Found', 404))
    }
    res.status(200).json(task);
});

//POST create
const createTask = asyncWrapper(async (req,res) => {
    const task = await TaskModel.create({taskID: new Date().getTime(), name: req.body.name})
    return res.status(201).json(task);
});

//PUT update
const updateTask = asyncWrapper(async (req,res,next) => {
    const task = await TaskModel.findOneAndUpdate({taskID: req.params.taskID}, req.body, {new: true, runValidators: true})
    if (!task) {
        return next(createCustomError('Not Found', 404))
    }
    res.status(200).json(task);
});

//DELETE byID
const deleteTask = asyncWrapper(async (req,res,next) => {
    const task = await TaskModel.findOneAndDelete({taskID: req.params.taskID})
    if (!task) {
        return next(createCustomError('Not Found', 404))
    }
    return res.status(204).json({});
});

module.exports = {
    getTasks,
    getTaskByID,
    createTask,
    updateTask,
    deleteTask
}