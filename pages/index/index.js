//获取应用实例
const app = getApp()

// 引入regulation.js
var regObj = require('../common/regulation.js')
var indexObj = {
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        showView:true,//与globalData的showView对应
        disabled:true,//默认提交按钮样式
    },
    //事件处理函数
    // bindViewTap: function() {
    //     wx.navigateTo({
    //         url: '../logs/logs'
    //     })
    // },
    uploadImg:function(){
        var that = this;
        wx.request({
                    url:'https://www.baidu.com',
                    data:{},
                    header:{
                        'content-type' : 'application/json'
                    },
                    success:function(res){
                        console.log(res.data);
                    }
                })
        // wx.chooseImage({
        //     count:3,
        //     success:function(res){
        //         console.log(res);
        //         var tempFilePaths = res.tempFilePaths;

        //         // upload();
        //     }
        // })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
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
    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    showMore:function(){
        regObj.showMore()
        this.setData({showView : regObj.data.showView})
    },
    //判断赏金金额
    showSubmit:function(e){
        if(e.detail.value >= 1){
            this.setData({disabled:false})
        }else{
            this.setData({disabled:true})
        }
    },
    //表单提交(暂只有页面跳转)
    formSubmit:function(e){
        wx.switchTab({
            url:"../help/help",
            fail:function(){
                console.log('aaaa')
            }
        })
    }
}
Page(indexObj);
function upload(){

}