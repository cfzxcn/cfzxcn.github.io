$(function () {
    // 1. 轮播图
    $(window).on('resize', () => {
        // 1.窗口的宽度
        let clientW = $(window).width();
        // 2. 设置临界点
        let isShowBigImage = clientW >= 600;
        // 3. 获取所有item
        let $allItems = $('#cf_carousel .carousel-item');
        // console.log($allItems);
        // 4. 遍历
        $allItems.each((index, item) => {
            // 4.1 取出图片的路径
            let src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
            let imgUrl = `url(${src})`;
            // 4.2 设置背景
            $(item).css({
                backgroundImage: imgUrl
            });
            // 4.3 创建img标签
            if (!isShowBigImage) { // 大屏幕
                let imgEle = `<img src="${src}">`;
                $(item).empty().append(imgEle);
            } else { // 小屏幕
                $(item).empty();
            }
        });
    });
    $(window).trigger('resize');

    // 3. 添加轮播图的滑动
    let startX = 0, endX = 0;
    let carouselInner = $('#cf_carousel .carousel-inner')[0];
    let $carousel = $('#cf_carousel');
    let carousel = $carousel[0];

    carouselInner.addEventListener('touchstart', (e) => {
        startX = e.targetTouches[0].clientX;
    });
    carouselInner.addEventListener('touchmove', (e) => {
        endX = e.targetTouches[0].clientX;
        if (endX - startX > 0) {  // 上一张
            $carousel.carousel('prev');
        } else if (endX - startX < 0) { // 下一张
            $carousel.carousel('next');
        }
    });

    // 4. 超出内容处理，这块负责公司产品在小屏下出现横向滚动条，配合html中的2条新增style使用；
    $(window).on('resize', ()=>{
        let $ul = $('#cf_product .nav');
        let $allLis = $('.nav-item', $ul);
        let totalW = 0; // 所有li的宽度
        $allLis.each((index, item)=>{//这句里的item是JS对象
            totalW += $(item).width();
        });
        // console.log(totalW);

        // 获取父标签的宽度
        let parentW = $ul.parent().width();
         //console.log(parentW);
        if(totalW > parentW) {
            $ul.css({
                width: totalW + 'px'
            })
        }else {
            $ul.removeAttr('style');
        }
    }).trigger('resize');

    // 2. 工具的提示
    $('[data-toggle="tooltip"]').tooltip();
});





//图集切换特效开始
$(".filter li a").click(function () {
    var filterValue = $(this).attr('data-filter');
    $(".isotope-container").isotope({
        filter: filterValue
    });

    $(this).addClass('active').parent().siblings().children().removeClass('active');
    return false;
});
//图集切换特效结束

//滚动监听
$('body').scrollspy({
    target: '#cfnavbar'
})

//平滑滚动 ,这里可控制折叠菜单的二级菜单，取消此JS二级菜单在折叠时无法弹出
$(".navbar a").click(function (event) {
//    console.log(this.hash);
    var target = $(this.hash);
    //    console.log(target.offset().top);
      $("html").animate({
        scrollTop:target.offset().top-150
      },500);

});




/*导航栏及LOGO,鼠标滚动缩小开始*/
/*滚动判断*/
$(window).scroll(function(){
   headerInit(); 
});

function headerInit(){
    if ($(this).scrollTop()>0){
        $("body").addClass("fixed-header-on");
    }else{
        $("body").removeClass("fixed-header-on");
    }
}
/*初始化*/
headerInit();
/*导航栏及LOGO滚动缩小结束*/





//公司产品样式开始（杀毒软件操作系统ORACLE网页制作木兰词画堂春浣溪沙采桑子一剪梅）使用淡入效果，内容延迟出现的特效，使用淡入效果，内容延迟出现的特效  开始====================================================
$(function () {
if ($("[data-animation-effect]").length > 0) {
    $("[data-animation-effect]").each(function (index, el) {
        var $this = $(this);
        var animationEffect = $this.attr["data-animation-effect"];
        setTimeout(function () {
            $this.removeClass("object-non-visiable").addClass("object-visiable");
            $this.addClass('animated ' + animationEffect);
        }, 800);
    });
}
    });
//使用淡入效果，内容延迟出现的特效  结束====================================================

/*向上功能开始*/
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400)
            $('div.go-top').show();
        else
            $('div.go-top').hide();
    });
    $('div.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});
/*向上功能结束*/
