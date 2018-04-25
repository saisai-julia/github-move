$(function(){


  // hover
  jQuery(".js-hover").hover(function(){
    jQuery(this).stop(true, false).animate({
      opacity:0.6
    }, {
      duration:400
    })
    },function(){
    jQuery(this).stop(true, false).animate({
      opacity:1
    }, {
      duration:400
    })
  });


  // scroll
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 20;
        $('html,body')
        .animate({scrollTop: targetOffset}, 800);
        return false;
      }
    }
  });


  // rollover
  $('.js-rollover').hover(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function(){
      if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });


  // pagetop
    var topBtn = $('.js-pagetop');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });


});