/**
 * Created by ZHUANGYI on 2017/12/12.
 */
var jfDropDown = function (details) {

    if(!details){

        details ={}

    }

    this.details = details;

    var thisEle = document.getElementById(this.details.ele);



    var thishasScrollEle = this.details.scrollClassname || 0;

    thisEle.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('click', clickEven.bind(this), false);

    function clickEven() {

        this.hide();

    }

    if(thishasScrollEle){

        clickThought(thishasScrollEle);

    }


    function clickThought(thishasScrollEle) {


        var thisScrollEle = thisEle.getElementsByClassName(thishasScrollEle)[0];



        var startY, endY, distance;//开始距离、移动距离

        thisScrollEle.addEventListener('touchstart', touchStartEle, false);

        thisScrollEle.addEventListener('touchmove', reachEdge, false);


        function touchStartEle(e) {

            //touchstart 获取位置startY
            startY = e.touches[0].pageY;

        }


        function reachEdge(event) {

            var _this = this;

            var eleScrollHeight = _this.scrollTop;//获取滚动条的位置 206

            var eleHeight = _this.scrollHeight;//元素实际高度 506

            var containerHeight = _this.offsetHeight;//容器高度 300


            //touchmove 获取位置 endY

            endY = event.touches[0].pageY;

            //两者之减的距离用来判断是向上活动还是向下滑动
            distance = startY - endY;

            //此时touchmove的值等于touchstart的值 循环
            endY = startY;


            //滚动条到达底部

            if (Math.abs(parseFloat(eleHeight) - parseFloat(eleScrollHeight + containerHeight)) <= 2) {


                //如果距离为正数 则向上滑动是 禁止浏览器事件

                if (distance > 0) {

                    event.preventDefault();


                }


            }

            else if (Math.abs(parseFloat(eleScrollHeight)) == 0) {

                //如果距离为负数 则向下滑动

                if (distance < 0) {

                    event.preventDefault();

                }


            }

        }


    }


    if(thisEle.getElementsByClassName('jf_drop_down_bg')[0]) {

        addEvent(thisEle.getElementsByClassName('jf_drop_down_bg')[0]);


    }


    function addEvent(ele) {

        var allEvent=['touchstart','touchmove','touchend'];

        for(var i=0;i<allEvent.length;i++) {

            ele.addEventListener(allEvent[i],eventBan,false)

        }

    }

    function eventBan(e) {

        window.event ? window.event.returnValue = false : e.preventDefault();

    }

};

jfDropDown.prototype.show = function (details) {


    if(details){

        details.fn();

    }


    var thisEle = document.getElementById(this.details.ele);

    thisEle.style.display = 'block';

    setTimeout(function () {

        if (thisEle.className.indexOf('show') == -1) {

            thisEle.className += ' show'

        }

    }, 1);


    document.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling);//给阴影绑定禁止事件





};

jfDropDown.prototype.hide = function (details) {

    if(details){

        details.fn();

    }

    var thisEle = document.getElementById(this.details.ele);



    if (thisEle.className.indexOf('show') > -1) {

        transitionMove(thisEle);

        thisEle.className = thisEle.className.replace(' show', '')

    }

    windowBanEvent.unbundling();//解绑页面禁止事件



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


};
