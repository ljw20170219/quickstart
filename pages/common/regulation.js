const app = getApp()
var regObj = {}
regObj.data = {
    showView: true, //与globalData的showView对应
    aa:'tack'
}
regObj.showMore = function() {
    // 每次点击均对globalData.showView取反并将值赋给本地的showView
    app.globalData.showView = !app.globalData.showView;
}
// Page(regObj)

// 释放接口
module.exports.showMore = regObj.showMore