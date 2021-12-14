const express = require('express');
const router = express.Router()
const  Mock = require('mockjs')

const  Random = Mock.Random
const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': Random.cname(),
        'email': '@email',
    }]
})

router.get('/api/list',(req,res)=>{
    console.log(data);
    res.send([
        {
            name:'xiaowang',
            age:'32',
        },
        {
            name:'xiaoli',
            age:'18'
        },
    ])
})
module.exports = router;