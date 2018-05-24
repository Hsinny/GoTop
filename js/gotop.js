
$(document).ready(function () {

  //===================================================================
  // Go Top
  //===================================================================
  $('#goTop').click(function () {
    event.preventDefault();            // event.preventDefault() 移除本身預設的 HTML 事件，例如<a href="#">不會跳回頁面頂端
    $('html,body').animate({           //$(選擇器).animate({PARAMS}，速度，callBack);
      scrollTop: 0
    }, 1000);
  });

  //===================================================================
  // Go Top
  //===================================================================
  $(window).scroll(function () {
    if ($(this).scrollTop() > 640) {   // $(選擇器).scrollTop() 擷取捲軸的垂直位置
      $('#goTop').addClass("show");
    } else {
      $('#goTop').removeClass("show")
    }
  });

});