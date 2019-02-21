const state = {
    user: {
        nickname: '',
        gender: 0,
        id: 0,
        type: 0,
        avatar: '',
    },
    role: {
        accessPath:[
            {
                name:'个人中心',
                level: 1,
                path:'/user',
                childrenPath:[
                    {
                        name:'基本信息',
                        level: 2,
                        path:'/user/info',
                    },
                    {
                        name:'修改密码',
                        level: 2,
                        path:'/user/password',
                    }
                ]
            },
            {

            }
        ],
    }
}
export default state
