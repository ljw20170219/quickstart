//获取应用实例
const app = getApp()

var mylogObj = {};
mylogObj.data = {
    userInfo:""
}

mylogObj.data = {
    send:true,
    sendTip:{
        tip:78974,
        num:12
    },
    receiveTip:{
        tip:456354,
        num:56
    },
    myQuestionGroup:[
        {
            myQuestion:"我的问题我的问题我的问题我的问题我的问题我的问题",
            myQuestionPay:'121',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
        {
            myQuestion:"我的问题我的问题我的问题我的问题我的问题我的问题",
            myQuestionPay:'12',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
        {
            myQuestion:"我的问题我的问题我的问题我的问题我的问题我的问题",
            myQuestionPay:'121',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
    ],
    mySolutionGroup:[
        {
            myQuestion:"我的回答",
            myQuestionPay:'121',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
        {
            myQuestion:"我的回答",
            myQuestionPay:'12',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
        {
            myQuestion:"我的回答",
            myQuestionPay:'121',
            myQuestionDate:'8月16日',
            myQuestionTime:'08:47'
        },
    ]
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
mylogObj.sendFromMe = function(){
    this.setData({send:true})
}
mylogObj.receive = function(){
    this.setData({send:false})
}
Page(mylogObj);