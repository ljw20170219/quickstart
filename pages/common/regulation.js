const app = getApp()
var regObj = {}
regObj.data = {
    showView: true,
}
regObj.showMore = function() {
    regObj.data.showView = !regObj.data.showView;
}
// Page(regObj)

// 释放接口
module.exports.data = regObj.data;
module.exports.showMore = regObj.showMore