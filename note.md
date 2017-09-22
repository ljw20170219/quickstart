## 微信开发知识点
**修改app.js的globalData:**
    getApp().globalData.xxx = 'xxx';

**实现模板显示与隐藏的思路:**
    通过设置全局中的showView作为参照变量(默认为true),点击时取反(即ture or false互换),并将其赋值到本地的参照变量,通过微信内置的wx:if  else进行判断当前本地的参照变量是否为true,true则显示部分,false则显示全部.但这里有个问题,要显示的部分必须存在于本地而非模板文件中.后续问题待研究.

## 命名规范
    html标签的id和class均以字母横杠命名,即class = "get-help"

## 点击事件
- template.wxml中的icon-less和icon-moreunfold的点击放置在index.js文件下(暂定)

## 备注(待修改)
- 暂定help.wxml页面为tabBar页面,跳转函数为wx.switchTab,后期将换成wx.navigateTo方法,[详见此页面最后一行](https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject)