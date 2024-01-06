const taskModel = require('../models/task')

const taskAdd = async ctx => {
    let { title, completedTime } = ctx.request.body
    const curTime = new Date()
    await taskModel
        .create({ title, content: '',completedTime, createdTime: curTime, startDate: curTime, creator: '', completedUserId: '', deleted: 0, status: 0, tags: [], priority: 0, projectId: '' })
        .then(res => {
            ctx.body = { code: 200, data: res }
        })
        .catch(err => {
            ctx.body = { code: 400, msg: err }
        })
}

module.exports = {
    taskAdd
}