const mongoose = require('mongoose')

const mongoConnect = async () => {
    await mongoose.connect('mongodb://localhost:27017/toDo', { useNewUrlParser: true })
        .then(() => {
            console.log('数据库连接成功')
        }).catch(err => {
            console.error('数据库连接失败', err)
        })
}

module.exports = mongoConnect