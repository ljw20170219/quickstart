// answer.js
//获取应用实例
const app = getApp()

// 引入regulation.js
var regObj = require('../common/regulation.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo:false,
        showView:true,
        solution:false,
        imgUrl:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506421925352&di=1305aa2226d0b537ff0e88baa1a754b1&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3925072816%2C1436130400%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506421924144&di=5947707df21f47455b78065c633f2662&imgtype=0&src=http%3A%2F%2Fwww.ikuku.cn%2Fwp-content%2Fuploads%2Fuser%2Fu1497%2FPOST%2Fp211963%2F1403092292994152-818x460.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506421924143&di=2c9983480258103c9ff7490316ed712e&imgtype=0&src=http%3A%2F%2Fwww.ikuku.cn%2Fwp-content%2Fuploads%2Fuser%2Fu1497%2FPOST%2Fp182768%2F138743816870313-ibijiashan-rukou-fuwuqu-chengshijianzhu-818x380.jpg'
        ],
        remainingTime:23,
        helpers:0,
        tip:1,
        timeAgo:3, //问题在timeAgo之前回答
        averageTip:0, //平分的赏金额
        choosedHelper:1, //被选中的回答者人数
        checkboxArr:[],
        checkboxMap:0,
        answerGroup:[
            {
                userinfoAvatarUrl:'https://wx.qlogo.cn/mmopen/vi_32/d4dVeADn1RmEbU9JicX3niaBicurlPAZ1pKUHibastzHVoU9SdC77iamGTwwFptPMVkqQurNWLYvcgHFtpXROKckLCw/0',
                userinfoNickName:'Mythrow',
                userAnswer:"Just do it, and never give up, when you have diffiuct on your work, don't be afraid, go on please.",
                value:"one",
                name:"one",
                checked:"",
            },
            {
                userinfoAvatarUrl:'https://wx.qlogo.cn/mmopen/vi_32/d4dVeADn1RmEbU9JicX3niaBicurlPAZ1pKUHibastzHVoU9SdC77iamGTwwFptPMVkqQurNWLYvcgHFtpXROKckLCw/0',
                userinfoNickName:'Mythrow',
                userAnswer:"Just do it, and never give up, when you have diffiuct on your work, don't be afraid, go on please.",
                value:"two",
                name:"two",
                checked:"",
            },
            {
                userinfoAvatarUrl:'https://wx.qlogo.cn/mmopen/vi_32/d4dVeADn1RmEbU9JicX3niaBicurlPAZ1pKUHibastzHVoU9SdC77iamGTwwFptPMVkqQurNWLYvcgHFtpXROKckLCw/0',
                userinfoNickName:'Mythrow',
                userAnswer:"Just do it, and never give up, when you have diffiuct on your work, don't be afraid, go on please.",
                value:"three",
                checked:"",
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
            console.log(app.globalData.userInfo)
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
    showMore:function(){
        regObj.showMore()
        this.setData({
            showView:app.globalData.showView
        })
    },
    previewImage:function(e){
        var index = e.currentTarget.dataset.index,
            imgUrl = this.data.imgUrl;
        wx.previewImage({
            current:imgUrl[index],
            urls:imgUrl
        })
    },
    checkboxChange:function(e){
        // 点击时将checkbox的值放入checkboxArr中
        var ca;
        ca = this.data.checkboxArr;
        ca.push(e.detail.value[0]);
        this.setData({
            checkboxArr:ca
        })
        // 查找undefined的个数
        var mark = 0;
        for(var i = 0; i < ca.length; i++){
            if(ca[i] === undefined)
            {
                mark++;
                this.setData({checkboxMap:mark})
            }
        }
        // 得到被选中人的数量
        if(this.data.checkboxMap === 0){
            this.setData({choosedHelper:ca.length})
        }else{
            this.setData({choosedHelper:ca.length - (this.data.checkboxMap*2)})
        }
        // 被选中的人的平均赏金
        var avarage = this.data.tip/this.data.choosedHelper;
        if(avarage % 1 < 1){
            avarage = Math.floor(avarage*10)/10
        }
        this.setData({avarageTip:avarage})
    }
})