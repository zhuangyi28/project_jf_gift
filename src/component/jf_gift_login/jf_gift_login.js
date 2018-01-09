/**
 * Created by ZHUANGYI on 2017/8/2.
 */
/*倒计时*/

var countDown = {

    InterValObj: 0,

    nums: 60,//设置秒

    btn: 0,//点击按钮

    curCount: 0,//当前剩余秒数

    sendCode: function (thisBtn) {

        event.preventDefault();

        curCount = countDown.nums;

        countDown.btn = thisBtn;

        //将按钮置为不可点击
        countDown.btn.disabled = true;


        countDown.btn.value = '重新发送' + curCount + 's';

        //一秒执行一次
        InterValObj = setInterval(countDown.doLoop, 1000);
    },

    doLoop: function () {

        if (curCount == 0) {

            window.clearInterval(InterValObj); //清除js定时器

            countDown.btn.disabled = false;

            countDown.btn.style.borderColor = '#10a6e2';

            countDown.btn.value = '获取验证码';

        } else {

            curCount--;

            countDown.btn.value = '重新发送' + curCount + 's';
        }
    }

};




