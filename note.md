## 微信开发知识点
**修改app.js的globalData:**
    
    getApp().globalData.xxx = 'xxx';

**实现模板显示与隐藏的思路:**
    
    通过设置全局中的showView作为参照变量(默认为true),点击时取反(即ture or false互换),并将其赋值到本地的参照变量,通过微信内置的wx:if  else进行判断当前本地的参照变量是否为true,true则显示部分,false则显示全部.但这里有个问题,要显示的部分必须存在于本地而非模板文件中.后续问题待研究.

**模板中添加事件**
    
    在模板中添加事件,引用模板必须为include,实现原理:
    *include*进来的页面与*import*不同,有三点:
        - import进来的页面必须以<template name="regulation"></template>闭合标签包裹,include不用.
        - include的页面所用到的js文件不用注册,即不用Page()函数处理数据对象.
        - include的页面可以处理事件.但import只能处理静态的.也就是如果导入的模板文件带有事件性质的,如''点击''之类,则通过include来处理.
    
    模板文件中的取值只能是被导入页面所对应的js文件中的值,如,template.wxml为模板文件,该页面被导入到index.wxml文件中,此时模板文件中的{{motto}}只能在index.js 中的data对象中被定义才能使用.

## 命名规范
    html标签的id和class均以字母横杠命名,如class = "get-help"
    方法名为除首单词外其余均大写的单词组合,如shareToCricle

## 点击事件
- template.wxml中的icon-less和icon-moreunfold的点击放置在index.js文件下(暂定)

## 备注(待修改)
- 暂定help.wxml页面为tabBar页面,跳转函数为wx.switchTab,后期将换成wx.navigateTo方法,[详见此页面最后一行](https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject)