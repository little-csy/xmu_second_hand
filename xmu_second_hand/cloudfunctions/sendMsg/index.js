
const cloud = require('wx-server-sdk')
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: "cloud1-0gvo7vira61b656b"
})
exports.main = async(event, context) => {
  try {
    if(event.wxnum === ''){
      event.wxnum = '无'
    }
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid, //要推送给那个用户
      page: 'pages/index/index', //要跳转到那个小程序页面
      //miniprogram_state:"developer",
      data: {//推送的内容
        thing6: {
          value: event.wxnum
        },
        thing1: {
          value: event.status,
        },
        thing3: {
          value: event.good
        },
        
      },
      templateId: '7z7kZrE931R8-7MKtn1oI5WOKIVakzf71yAGVYjmjf4' //模板id
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}