$(document).ready(function() {
  var wrap = $("#wrap");
  console.log('ok');
  $('.winilla-btn--close').click(function(){
    $('.navigate-container').removeClass('popup-show');
  });
  $(window).scroll(function() {
    if($(this).width() > 900) {
      if ($(this).scrollTop() > 900 ) {
        wrap.addClass("fixed-nav");
      } else {
        wrap.removeClass("fixed-nav");
      }
    } else {
      if ($(this).scrollTop() > 500 ) {
        wrap.addClass("fixed-nav");
      } else {
        wrap.removeClass("fixed-nav");
      }
    }
  });
  showPopup('#search-category', '#js-show-category');
  showPopup('.menu__circle-btn', '.navigate-container');
  addText('#js-show-category .list-dropdown__item', '#search-category', '#js-show-category');
  if($(window).width() < 900) {
    $('.social').removeClass('social');
  }
});
