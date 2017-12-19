/**
 * Created by ZHUANGYI on 2017/12/12.
 */
var homePagePrompt = {

    sortListShow:function () {

        document.getElementsByClassName('nav_sort')[0].addEventListener('click',function () {

            var thisEle = document.getElementsByClassName('nav_sort')[0];

            var thisTab = document.getElementById('sortList');

            thisEle.className += ' show';



            if(thisTab.className.indexOf('show')>-1){

                thisEle.getElementsByTagName('span')[0].className = 'blue';

                thisEle.getElementsByClassName('arrow')[0].className += ' arrow_blue';

                homePagePrompt.hidePrompt();

                sortListShow.hide({

                    fn:function () {

                        thisEle.className = 'nav_sort'
                    }

                })

            }

            else {


                thisEle.getElementsByTagName('span')[0].className = 'blue';

                thisEle.getElementsByClassName('arrow')[0].className += ' arrow_blue';

                homePagePrompt.hidePrompt();

                sortListShow.show({

                    fn:function () {

                        document.getElementsByClassName('sort_list')[0].addEventListener('click', chooseSort, false);
                    }
                })
            }


            //选择下拉框中的选项
            function chooseSort(e) {

                var evt = e || window.event;

                var thisTargetEle = evt.srcElement || evt.target;

                if (document.getElementsByClassName('sort_list')[0].getElementsByClassName('selected')[0]) {

                    document.getElementsByClassName('sort_list')[0].getElementsByClassName('selected')[0].className = ''

                }

                thisTargetEle.className += ' selected';

                //选择后下拉框收起
                sortListShow.hide({

                    fn: function () {

                        thisEle.className = 'nav_sort';
                        //收回之后删除监听
                        document.getElementsByClassName('sort_list')[0].removeEventListener('click', chooseSort, false);



                    }
                });

                //获取点击的innerHtml
                document.getElementsByClassName('nav_sort')[0].getElementsByTagName('span')[0].innerHTML = thisTargetEle.innerHTML;


            }

        },false);

    },


    detailsListShow:function () {


        document.getElementsByClassName('nav_details')[0].addEventListener('click',function () {

            var thisEle = document.getElementsByClassName('nav_details')[0];

            var thisTab = document.getElementById('detailsList');

            thisEle.className += ' show';


            if(thisTab.className.indexOf('show')>-1){

                thisEle.getElementsByTagName('span')[0].className = 'blue';

                thisEle.getElementsByClassName('arrow')[0].className += ' arrow_blue';

                homePagePrompt.hidePrompt();


                detailsListShow.hide({

                    fn:function () {

                        thisEle.className = 'nav_details'
                    }

                })

            }

            else {


                thisEle.getElementsByTagName('span')[0].className = 'blue';

                thisEle.getElementsByClassName('arrow')[0].className += ' arrow_blue';

                homePagePrompt.hidePrompt();


                detailsListShow.show({

                    fn:function () {

                        document.getElementsByClassName('details_list')[0].addEventListener('click', chooseDetails, false);
                    }
                })
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
                detailsListShow.hide({

                    fn: function () {

                        thisEle.className = 'nav_details';
                        //收回之后删除监听
                        document.getElementsByClassName('details_list')[0].removeEventListener('click', chooseDetails, false);



                    }
                });

                //获取点击的innerHtml
                document.getElementsByClassName('nav_details')[0].getElementsByTagName('i')[0].innerHTML = thisTargetEle.innerHTML;


            }




        },false);





    },


    hidePrompt:function () {

    var allEle = document.getElementById('prompt_box').getElementsByClassName('jf_drop_down');

    for (var i = 0; i < allEle.length; i++) {

        allEle[i].className = 'jf_drop_down';

    }

}







}
