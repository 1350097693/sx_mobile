//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",

    swiperItem: ['red', 'blue', 'white'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 400
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    console.log(11)
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
  //事件处理函数

})