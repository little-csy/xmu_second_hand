var data = {
      //云开发环境id
      env: 'cloud1-0gvo7vira61b656b',
      //分享配置
      share_title: '厦大二手交易平台',
      share_img: '/images/touxiang.jpg', 
      share_poster:'https://www.ndky.edu.cn/r/cms/www/default/static/imgs/common/header-logo.png',
      //客服联系方式
      kefu: {
            qq: '1370975995',
            weixin:'1370975995'
      },

      bgurl: '/images/startBg.jpg',
      //校区
      campus: [{
                  name: '翔安校区',
                  id: 0
            },
            {
                  name: '思明校区',
                  id: 1
            },
           

      ],
      //配置分类
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '书籍',
                  id: 0
            },
            {
                  name: '学习用品',
                  id: 1
            },
            {
                  name: '数码产品',
                  id: 2
            },
            {
                  name: '衣物',
                  id: 3
            },
            {
                  name: '运动器材',
                  id: 4
            },
            {
                  name: '化妆品',
                  id: 5
            },
            {
                  name: '其他',
                  id: 6
            },
      ],
}

function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}