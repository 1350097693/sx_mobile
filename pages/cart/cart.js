// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "number": 1
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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
  }
})