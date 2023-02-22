const appid = 'wx8479f288f6caabe6'; //你的小程序appid
const secret = 'b6f5c5ba471549ab9fe0da6813beef89'; //你的小程序secret



const cloud = require('wx-server-sdk');
cloud.init({
      // API 调用都保持和云函数当前所在环境一致
      env: "cloud1-0gvo7vira61b656b"
    })
const TcbRouter = require('tcb-router'); //云函数路由
const rq = require('request');
const wxurl = 'https://api.weixin.qq.com';
var WXBizDataCrypt = require('./RdWXBizDataCrypt') // 用于手机号解密
cloud.init()
// 云函数入口函数
exports.main = async(event, context) => {
      const app = new TcbRouter({
            event
      });
      //获取电话号码
      app.router('phone', async(ctx) => {
            ctx.body = new Promise(resolve => {
                  rq({
                        url: wxurl + '/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + event.code + '&grant_type=authorization_code',
                        method: "GET",
                        json: true,
                  }, function(error, response, body) {
                        const decrypt1 = new WXBizDataCrypt(appid, body.session_key) // -解密第一步
                        const decrypt2 = decrypt1.decryptData(event.encryptedData, event.iv) // 解密第二步*/
                        resolve({
                              data: decrypt2
                        })
                  });
            });
      });
      //获取openid
      app.router('getid', async(ctx) => {
            const wxContext = cloud.getWXContext()
            ctx.body = wxContext.OPENID;
      });
      return app.serve();
}