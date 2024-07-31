$(function () {
  function updateScroll() {
    if ($(window).scrollTop() >= 80) {
        $(".header").addClass('active');
    } else {
        $(".header").removeClass("active");
    }
}

$(function() {
    $(window).scroll(updateScroll);
    updateScroll();
});

  $(".header .header-desktop .menu-btn").on("click", function(){

    $(".header .header-desktop .main_menu ul").slideToggle(400);
    var src = $(".header .header-desktop .menu-btn img").attr('src');
    var newsrc = (src=='assets/images/hamburger-menu.svg') ? 'assets/images/close-icon.svg' : 'assets/images/hamburger-menu.svg';
    $(".header .header-desktop .menu-btn img").attr('src', newsrc );
  });

  

});

