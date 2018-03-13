/**
 * Created by ZHUANGYI on 2017/12/12.
 */
var homePagePrompt = {

    //sort下拉框
    sortTabShow:function (thisSortNav) {


            var thisEle = thisSortNav;

            var thisTab = document.getElementById('sortList');

            thisEle.className += ' show';

            //点击后字变成蓝色
            thisEle.getElementsByTagName('span')[0].className = 'blue';

            //箭头变化
            thisEle.getElementsByClassName('arrow')[0].className+=' arrow_blue';

            if(thisEle.getElementsByClassName('arrow_blue')[0]){

            thisEle.getElementsByClassName('arrow')[0].className = 'arrow arrow_blue';

             }

           //点击背景收回
           thisTab.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('click',function () {

            homePagePrompt.DropDownHide(thisTab)

            },false);


           if(thisTab.getElementsByClassName('jf_drop_down_bg')[0]){


               if(browser.os.android){


                   thisTab.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling,false);


               }
               else {

                   homePagePrompt.addEvent(thisTab.getElementsByClassName('jf_drop_down_bg')[0]);
               }




           }

            //如果弹框有show
            if(thisTab.className.indexOf('show')>-1){

                //只允许一个弹框出现
                homePagePrompt.hidePrompt();

                //弹框消失
                homePagePrompt.DropDownHide(thisTab,

                    function () {

                        thisEle.className = 'nav_sort'
                    }

                );

            }

            else {

                //thisEle.className = 'nav_sort';

                homePagePrompt.hidePrompt();

                //弹框出现
                homePagePrompt.DropDownShow(thisTab,

                    function () {

                        document.getElementsByClassName('sort_list')[0].addEventListener('click', chooseSort, false);

                        homePagePrompt.clickThought('sortList','sort_list')


                    }


             )

            }


            //选择下拉框中的选项
            function chooseSort(e) {

                var evt = e || window.event;

                var thisTargetEle = evt.srcElement || evt.target;

                //console.log(thisTargetEle);

                if (document.getElementsByClassName('sort_list')[0].getElementsByClassName('selected')[0]) {

                    document.getElementsByClassName('sort_list')[0].getElementsByClassName('selected')[0].className = ''

                }

                thisTargetEle.className += ' selected';

                //选择后下拉框收起
                homePagePrompt.DropDownHide(thisTab,

                    function () {

                        thisEle.className = 'nav_sort';
                        //收回之后删除监听
                        document.getElementsByClassName('sort_list')[0].removeEventListener('click', chooseSort, false);



                    }
                );

                //获取点击的innerHtml
                document.getElementsByClassName('nav_sort')[0].getElementsByTagName('span')[0].innerHTML = thisTargetEle.innerHTML;


            }


    },

    //details 下拉框
    detailsTabShow:function (thisDetailsNav) {

        var thisEle = thisDetailsNav;

        var thisTab = document.getElementById('detailsList');

        thisEle.className += ' show';

        //点击后字变成蓝色
        thisEle.getElementsByTagName('span')[0].className = 'blue';

        //箭头变化
        thisEle.getElementsByClassName('arrow')[0].className+=' arrow_blue';


        if(thisEle.getElementsByClassName('arrow_blue')[0]) {

            thisEle.getElementsByClassName('arrow')[0].className = 'arrow arrow_blue';

        }


        thisTab.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('click',function () {

            homePagePrompt.DropDownHide(thisTab)

        },false);


        if(thisTab.getElementsByClassName('jf_drop_down_bg')[0]){


            if(browser.os.android){


                thisTab.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling,false);


            }
            else {

                homePagePrompt.addEvent(thisTab.getElementsByClassName('jf_drop_down_bg')[0]);
            }




        }


            if(thisTab.className.indexOf('show')>-1){


                homePagePrompt.hidePrompt();


                homePagePrompt.DropDownHide(thisTab,

                    function () {

                        thisEle.className = 'nav_details'
                    }

                )

            }

            else {

                homePagePrompt.hidePrompt();

               homePagePrompt.DropDownShow(thisTab,

                    function () {

                        document.getElementsByClassName('details_list')[0].addEventListener('click', chooseDetails, false);

                        homePagePrompt.clickThought('detailsList','details_list')
                    }
               )
            }


            //选择下拉框中的选项
            function chooseDetails(e) {

                var evt = e || window.event;

                var thisTargetEle = evt.srcElement || evt.target;

                if (document.getElementsByClassName('details_list')[0].getElementsByClassName('selected')[0]) {

                    document.getElementsByClassName('details_list')[0].getElementsByClassName('selected')[0].className = ''

                }

                thisTargetEle.className += ' selected';

                //选择后下拉框收起
                homePagePrompt.DropDownHide(thisTab,

                    function () {

                        thisEle.className = 'nav_details';
                        //收回之后删除监听
                        document.getElementsByClassName('details_list')[0].removeEventListener('click', chooseDetails, false);

                    }
                );

                //获取点击的innerHtml
                //document.getElementsByClassName('nav_details')[0].getElementsByTagName('i')[0].innerHTML = thisTargetEle.innerHTML;


            }



    },

    //下拉框只能存在一个
    hidePrompt:function () {

    var allEle = document.getElementById('prompt_box').getElementsByClassName('jf_drop_down');

    for (var i = 0; i < allEle.length; i++) {

        allEle[i].className = 'jf_drop_down';

    }

},

    //下拉框显示
    DropDownShow:function (ele,fn) {

        if(fn){

            fn();
        }

        var thisEle = ele;

        thisEle.style.display = 'block';

        setTimeout(function () {

            if (thisEle.className.indexOf('show') == -1) {

                thisEle.className += ' show'

            }

        }, 1);


        document.getElementsByClassName('jf_drop_down_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling);//给阴影绑定禁止事件



    },

    //下拉框消失
    DropDownHide:function (ele,fn) {

        if(fn){

            fn();
        }

        var thisEle = ele;

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

    },

    //解决下拉框穿透

    clickThought:function(thisId,scrollEle) {

    var thisScrollEle = document.getElementById(thisId).getElementsByClassName(scrollEle)[0];

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


},


    addEvent:function (ele) {

    var allEvent=['touchstart','touchmove','touchend'];

    for(var i=0;i<allEvent.length;i++) {

        ele.addEventListener(allEvent[i],homePagePrompt.eventBan,false)

    }

},


    eventBan:function (e) {

    // window.event? window.event.cancelBubble = true : e.stopPropagation();

     window.event ? window.event.returnValue = false : e.preventDefault();


},

    showSharePrompt:function (thisPromptEle) {

    var thisEle = thisPromptEle;

    var thisCloseEle = document.getElementsByClassName('share_close')[0]

    if(thisEle.getElementsByClassName('show_prompt')[0]){

        shareHide(thisEle)

    }
    else {

        shareShow(thisEle)


    }

    thisCloseEle.addEventListener('click',function () {

        shareHide(thisEle)
    })



    function shareShow(thisEle) {

        thisEle.style.display = 'block';

        setTimeout(function () {

            if (thisEle.className.indexOf('show_prompt') == -1) {

                thisEle.className += ' show_prompt'

            }

        }, 10);


        document.getElementsByClassName('share_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling);//给阴影绑定禁止事件

    }

    function shareHide(thisEle) {

        if (thisEle.className.indexOf('show_prompt') > -1) {

            transitionMove(thisEle);

            thisEle.className = thisEle.className.replace(' show_prompt', '')

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


    }


}


};


