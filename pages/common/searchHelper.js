var helpObj = {
    data:{
        showOrHide:'',
    },
    searchHelper:function(){
        helpObj.data.showOrHide = 'hide';
    },
    cancleShare:function(){
        helpObj.data.showOrHide = 'show'
    }
};

// 释放接口
module.exports.data = helpObj.data;
module.exports.searchHelper = helpObj.searchHelper;
module.exports.cancleShare = helpObj.cancleShare;