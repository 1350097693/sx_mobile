// pages/index/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "number": 1,
    dialog1: false,
    dialog2: false
  },

  reduce: function(e) {
    if (this.data.number > 0) {
      this.setData({
        number: this.data.number - 1
      })
    }

  },
  add: function(e) {
    this.setData({
      number: this.data.number + 1
    })
  },
  open1() {
    this.setData({
      dialog1: true
    });
  },
  open2() {
    this.setData({
      dialog2: true
    });
  },
  close: function () {
    this.setData({
      dialog1: false,
      dialog2: false
    });
  },
})