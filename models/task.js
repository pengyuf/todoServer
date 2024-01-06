const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completedTime: {
        type: String,
        required: true
    },
    content: String,
    createdTime: String,
    startDate: String,
    creator: Number,
    completedUserId: Number,
    deleted: Number,
    status: Number,
    tags: [String],
    priority: Number,
    projectId: String
})
const taskModel = mongoose.model('tasks', taskSchema)
module.exports = taskModel