/**
 * Created by ZHUANGYI on 2017/12/21.
 */

var giftAddress = {

    //复选框单选框
    checkBoxChoose:function(thisEles,obj) {

        var allCheckBox = thisEles;

        for (var i = 0; i < allCheckBox.length; i++) {


            if (allCheckBox[i] == obj && obj.checked) {

                allCheckBox[i].checked = true;

            } else {

                allCheckBox[i].checked = false;
            }
        }

    },


    addressPopShow:function (ele,fn) {

        if(fn){
            fn();
        }

    var thisEle = ele;

    thisEle.style.display = 'block';

        document.getElementsByClassName("gift_address_content")[0].className += " ovfHiden";//页面禁止滚动

        setTimeout(function () {

        if (thisEle.className.indexOf('show') == -1) {

            thisEle.className += ' show'

        }

    }, 1);

    document.getElementsByClassName('jf_pop_up_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling,false);//给阴影绑定冒泡事件


},

    addressPopHide:function (ele,fn) {

        if(fn){

            fn();
        }

    var thisEle = ele;

    if (thisEle.className.indexOf('show') > -1) {

        transitionMove(thisEle);

        thisEle.className = thisEle.className.replace(' show', '')

    }

    windowBanEvent.unbundling();//解绑页面禁止事件

    document.getElementsByClassName("gift_address_content")[0].className = "gift_address_content";//页面禁止滚动

    function transitionMove(ele) {

        // Safari 3.1 到 6.0 代码
        ele.addEventListener("webkitTransitionEnd", MFunction);
        // 标准语法
        ele.addEventListener("transitionend", MFunction);

        function MFunction() {

            ele.style.display = 'none';
            // Safari 3.1 到 6.0 代码
            ele.removeEventListener("webkitTransitionEnd", MFunction);
            // 标准语法
            ele.removeEventListener("transitionend", MFunction);


        }


    }


},

}
