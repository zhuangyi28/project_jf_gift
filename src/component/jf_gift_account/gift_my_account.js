/**
 * Created by ZHUANGYI on 2017/12/20.
 */
var giftAccount = {

    //tab切换
    changeAccountList:function (thisEle,e) {

    var evt = e||window.event;

    var thisTargetEle = evt.srcElement || evt.target;

    var thisBox = thisEle;

    var thisTabEle = thisBox.getElementsByClassName('tab');

    var tabContent = document.getElementsByClassName('gift_account_content')[0]

    for (var i=0;i<thisTabEle.length;i++){

        if(thisTargetEle == thisTabEle[i]){

            if(thisBox.getElementsByClassName('choose_tab')[0]){

                thisBox.getElementsByClassName('choose_tab')[0].className = 'tab'

            }

            thisTabEle[i].className +=' choose_tab';

            if(tabContent.getElementsByClassName('show')[0]){

                tabContent.getElementsByClassName('show')[0].className = 'gift_details_content'
            }


            tabContent.getElementsByClassName('gift_details_content')[i].className += ' show'
        }

    }


},

    //加减按钮
    volumeBtn:function (thisEle,e) {

    var evt = e||window.event;

    var thisEleTarget = evt.srcElement || evt.target;

    var thisInput = thisEle.getElementsByTagName('input')[0]


    //点击的是减

    if(thisEleTarget.className == 'reduce'){


        thisInput.value = changeValue(parseFloat(thisInput.value) - 1)


    }

    //点击的是加

    if(thisEleTarget.className == 'add'){

        thisInput.value = changeValue(parseFloat(thisInput.value) + 1)

    }

    //循环 小于等于1的时候永远为1，反之为他本身的值
    function changeValue(num) {


        if (num <= 1 || !num) {

            return 1;
        }
        else {

            return num;
        }

    }


}



};