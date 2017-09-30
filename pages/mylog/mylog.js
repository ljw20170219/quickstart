//获取应用实例
const app = getApp()

var mylogObj = {};
mylogObj.data = {
    userInfo:""
}
mylogObj.onLoad = function(){
    wx.getUserInfo({
        success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
            })
        }
    })
}
Page(mylogObj);