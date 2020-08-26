import Mock from 'mockjs';

Mock.mock('/api/user/login', {

    "status": 0,
    "data": {
        "id": "@id",
        "username": "mockjs",
        "email": "admin@51purse.com",
        "phone": 17731408937,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    },
    "msg": 'ok'

})