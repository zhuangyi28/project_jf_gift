/**
 * Created by ZHUANGYI on 2017/12/18.
 */
var orderConfirm = {

    clickViewMore:function () {

            var thisEle = document.getElementsByClassName('left_gift_list')[0];

            var showELe = document.getElementsByClassName('gift_subdivision_goods')[0];

            if(showELe.className.indexOf('view_more')> -1) {

                showELe.className = 'gift_subdivision_goods'

                thisEle.getElementsByTagName('span')[0].innerHTML = '显示细分商品';

                thisEle.getElementsByTagName('img')[0].style.transform = ''

            }

            else {

                showELe.className += ' view_more'

                thisEle.getElementsByTagName('span')[0].innerHTML = '点击收起';

                thisEle.getElementsByTagName('img')[0].style.transform = 'rotate(0deg)'

            }

        }




}