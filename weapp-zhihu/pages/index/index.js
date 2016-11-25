//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 2000
  },
  //事件处理函数
  bindViewTap: function(event) {
    // console.log(event.currentTarget.dataset.detail);
    wx.navigateTo({
      url: '../content/content?id=' + event.currentTarget.dataset.detail,
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          banner: res.data.top_stories,
          list: res.data.stories
        })
      }
    })
    // this.index = 1;
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
      //更新数据
      // that.setData({
        // userInfo:userInfo
      // })
    // })
  }
})
