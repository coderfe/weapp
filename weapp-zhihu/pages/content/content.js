Page({
  data: {
    art: {}
  },
  onReady: function() {
    wx.setNavigationBarTitle({
      title: "详情页面"
    })
  },
  onLoad: function(options) {
    var that = this;
    console.log(options);
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          art: res.data
        })
        console.log(res.data)
      }
    })
  }
})