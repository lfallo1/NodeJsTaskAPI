const express = require('express')
const tasksServices = require('../services/tasksService')

const router = express.Router()

//GET all
router.get('/', tasksServices.getTasks)

//GET byID
router.get('/:taskID', tasksServices.getTaskByID)

//POST create
router.post('/', tasksServices.createTask)

//PATCH update
router.patch('/:taskID', tasksServices.updateTask);

//DELETE byID
router.delete('/:taskID', tasksServices.deleteTask)

module.exports = router;