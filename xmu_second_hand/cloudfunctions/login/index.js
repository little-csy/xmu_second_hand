
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({

  env: "cloud1-0gvo7vira61b656b"
})


exports.main = (event, context) => {
  console.log(event)
  console.log(context)


  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.appid,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  }
}

