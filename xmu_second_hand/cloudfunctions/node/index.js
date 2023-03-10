// 云函数入口文件
const cloud = require('wx-server-sdk')
  
cloud.init({
   // API 调用都保持和云函数当前所在环境一致
   env: "cloud1-0gvo7vira61b656b"
 })
  
const db = cloud.database()
const _ = db.command
  
// 云函数入口函数
exports.main = async (event, _context) => {
 try {
  return await db.collection('publish').doc(event._id).update({
   // data 传入需要局部更新的数据
   data: {
      status:event.status
   }
  })
 } catch (e) {
  console.error(e)
 }
}