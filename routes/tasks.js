const router = require('koa-router')()
const { taskAdd } = require('../controllers/task')

router.prefix('/tasks')

router.post('/add', taskAdd)

module.exports = router