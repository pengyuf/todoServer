const userModel = require('../models/user')
const userAdd = async ctx => {
    let { username, password } = ctx.request.body
    const res = await userModel.findOne({ username })
    if (res) {
        ctx.body = { code: 407, msg: '此用户已存在' }
    } else {
        await userModel
            .create({ username, password })
            .then(result => {
                ctx.body = { code: 200, data: { username } }
            })
            .catch(err => {
                ctx.body = { code: 400, msg: '新增用户异常' }
            })
    }
}
const userDel = async ctx => {
    let { id } = ctx.request.body
    await userModel.findOneAndDelete({ _id: id }).then(res => {
        ctx.body = { code: 200, data: res }
    }).catch(err => {
        ctx.body = { code: 400, msg: '删除用户异常:' + err }
    })
}
const userFindAll = async ctx => {
    await userModel.find(null).then(res => {
        ctx.body = { code: 200, data: res }
    }).catch(err => {
        ctx.body = { code: 400, msg: '查询用户异常:' + err }
    })
}
const userFindOne = async ctx =>{
    let {id} = ctx.request.body
    await userModel.findOne({_id:id}).then(res=>{
        ctx.body = { code: 200, data: res }
    }).catch(err=>{
        ctx.body = { code: 400, msg: `查询用户${id}异常:` + err }
    })
}
const userUpdate = async ctx =>{
    let {username,id} = ctx.request.body
    await userModel.updateOne({_id:id},{username}).then(res=>{
        ctx.body = { code: 200, data: res }
    }).catch(err=>{
        ctx.body = { code: 400, msg: `修改用户${id}异常:` + err }
    })
}
module.exports = {
    userAdd,
    userDel,
    userFindAll,
    userFindOne,
    userUpdate
}