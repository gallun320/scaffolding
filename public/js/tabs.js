function tabs(addActive, firstContainerShow, addContainerTabs, nextAddActive, addContainerContent, addContent){
    $(addActive).addClass('active');
    $(firstContainerShow).show();

  $(addContainerTabs).delegate(nextAddActive + ':not(.active)', 'click', function () {
$(this).addClass('active').siblings().removeClass('active').parents(addContainerContent).find(addContent).hide().eq($(this).index()).fadeIn(700);
    });
}