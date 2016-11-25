Page({
  data: {
    themes: []
  },
  bindViewTap: function(event) {
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.dataset.id
    })
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          themes: res.data.others
        })
      }
    })
  }
});