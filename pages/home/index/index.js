// pages/home/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAuth:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkoutAuth();
    wx.getSystemInfo({
      success:res=>{
        console.log("型号");
        console.log(res.platform);
      }
    })
  },

  checkoutAuth:function(){
    let that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            showAuth: true
          });
        }
      }
    })
  },

  /**
 * 监听用户点击授权按钮
 */
  getAuthUserInfo: function (data) {
    this.setData({
      showAuth: false
    });
    wx.setStorageSync('user',data.detail.userInfo);
  },

  wechatNavigate:function(e){
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },

})