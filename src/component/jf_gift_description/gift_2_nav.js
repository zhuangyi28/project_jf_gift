/**
 * Created by ZHUANGYI on 2017/12/18.
 */
var giftDetails = {

    //点击tab滚动条滑动到指定位置
    changeTab:function() {


    var thisTab =  document.getElementsByClassName('details_nav_content')[0];

    var thisEle = thisTab.getElementsByClassName('product_details');


    thisTab.addEventListener('click',function (e) {

        var evt = e||window.event;

        var thisTargetEle = evt.srcElement||evt.target;


        for(var i=0;i<thisEle.length;i++){

            //如果是点击元素 移动到对应位置

            if(thisEle[i] == thisTargetEle){

                giftDetails.scrollMove(document.getElementById('description_box').getElementsByClassName('gift_details')[i].offsetTop - 42 + 5, 300)

            }

        }

    },false)

},



    srcollChangeDetails:function(){

        //滚动切换
        window.addEventListener('scroll',function () {



            var thisScrollTop;

            if(browser.os.android || browser.os.iOS){

                thisScrollTop = document.body.scrollTop;//网页被卷去的高
            }
            else {

                thisScrollTop = document.documentElement.scrollTop;//网页被卷去的高
            }

            var thisDocumentHeight = document.body.scrollHeight;//获取当前文档的高度 2242

            var thisWindowHeight = document.body.offsetHeight;//屏幕可视窗口高度 667

            var navContent = document.getElementsByClassName('details_nav_content')[0];//导航盒子

            var thisNavDistance = navContent.offsetHeight;//nav高度42

            var thisEleTop1 = document.getElementsByClassName('gift_details_images')[0].getBoundingClientRect().top;//1元素到页面高度

            var thisEleTop2 = document.getElementsByClassName('gift_specification_details')[0].getBoundingClientRect().top; //2元素到页面高度


            //固定tab 仅限安卓
            giftDetails.slidePositionTab();

            //滚动条在一定位置出现
            showTopBox();

            //如果距离大于0 两者都不高亮
            if(thisEleTop1 - thisNavDistance > 0) {

                //判断有没有高亮 有的话全部清除
                if(navContent.getElementsByClassName('selected')[0]){

                    navContent.getElementsByClassName('selected')[0].className = 'product_details';
                }

            }

            //如果到该元素页面的高度为负数的话 该元素已经通过nav 礼品详情高亮

            if(thisEleTop1 - thisNavDistance <= 0) {

                slideTabChoose(navContent,0)
            }

            //产品详情高亮
            if(thisEleTop2 - thisNavDistance <= 0) {

                slideTabChoose(navContent,1)
            }

            //选择切换tab

            function slideTabChoose(element,num) {


                if (element.getElementsByClassName('selected')[0]) {


                    element.getElementsByClassName('selected')[0].className = 'product_details';

                }

                element.getElementsByClassName('product_details')[num].className += ' selected';

            }


            //滚动条到一定位置 显示置顶按钮
            function showTopBox() {


                if(Math.abs(parseFloat(thisDocumentHeight) - parseFloat(thisScrollTop + thisWindowHeight)) <= 300){

                    //console.log('出现')
                    document.getElementsByClassName('top_box')[0].className = 'top_box'

                }

                else {


                    document.getElementsByClassName('top_box')[0].className = 'top_box show';
                    //console.log('消失')

                }


                //thisDocumentHeight 2059


                /* Math.abs(parseFloat(thisDocumentHeight) - parseFloat(thisScrollTop + thisWindowHeight));*/



            }




        },false)
    },



//滑动到达指定位置方法
scrollMove:function(scrollTo, time) {

    var scrollFrom = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    var count = 0;

    var every = 10;

    //到元素的距离
    scrollTo = parseInt(scrollTo);

    time /= every;

    var interval = setInterval(function () {

        count++;

        document.documentElement.scrollTop = document.body.scrollTop = (scrollTo - scrollFrom) / time * count + scrollFrom;

        if (count >= time) {

            clearInterval(interval);

        }
    }, every);

},

//安卓吸附导航方法
slidePositionTab:function() {


    if (!browser.os.iOS) {  //判断机型


        var thisNavTab = document.getElementsByClassName('details_nav_content')[0];

        var thisNavTabEmpty = document.getElementsByClassName('details_nav_box')[0];

        slideScrcoll();

        function slideScrcoll() {


            if (thisNavTab.getBoundingClientRect().top <= 0) { //元素到页面顶端的位置

                thisNavTab.className +=' fixed_nav'

            }

            else {

                thisNavTab.className = 'details_nav_content'

            }
        }


    }

},







}