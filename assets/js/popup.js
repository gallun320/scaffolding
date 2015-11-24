function showPopup(addClick,addShow ){
  $(addClick).click(function(){
    $(addShow).addClass('popup-show');
  });
}

function closePopup(addClick, addClose) {
  $(addClick).click(function() {
			$(addClose).removeClass('popup-show');
  });
}

function addText(addClick, writeText, removeClass){
  $(addClick).click(function(){
      var str = $(this).text();
      $(writeText).val(str);
      $(removeClass).removeClass('popup-show');
  });
}
