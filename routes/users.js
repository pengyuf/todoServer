const router = require('koa-router')()
const { userAdd, userDel, userFindAll, userFindOne, userUpdate } = require('../controllers/user')

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.post('/add', userAdd)

router.get('/list',userFindAll)

module.exports = router