var util = require('../../utils/util');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    detail: {},
  },
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: `https://cnodejs.org/api/v1/topic/${options.id}`,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          detail: res.data.data,
        })
        var content = res.data.data.content;
        WxParse.wxParse('content', 'html', content, that, 5);
      }
    });
  }
})