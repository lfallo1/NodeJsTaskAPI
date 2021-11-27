const mongoose = require('mongoose')

//schema config
const TaskSchema = new mongoose.Schema({
    taskID: Number,
    name: {
        type: String,
        minlength: [2, 'Min length is 2'],
        maxlength: [255, 'Max length is 255'],
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

//model (looks for lowercase / plural of the Name.. i.e., this will look for the collection named 'tasks')
module.exports = mongoose.model('Task', TaskSchema)