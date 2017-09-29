var searchHelperObj = {
    data:{
        showOrHide:'',
    },
    searchHelper:function(){
        searchHelperObj.data.showOrHide = 'hide';
    },
    cancleShare:function(){
        searchHelperObj.data.showOrHide = 'show'
    }
};

// 释放接口
module.exports.data = searchHelperObj.data;
module.exports.searchHelper = searchHelperObj.searchHelper;
module.exports.cancleShare = searchHelperObj.cancleShare;