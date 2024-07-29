$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active");
    }
  });

  $(".header .header-desktop .menu-btn").on("click", function(){

    $(".header .header-desktop .main_menu ul").slideToggle(400);
    var src = $(".header .header-desktop .menu-btn img").attr('src');
    var newsrc = (src=='assets/images/hamburger-menu.svg') ? 'assets/images/close-icon.svg' : 'assets/images/hamburger-menu.svg';
    $(".header .header-desktop .menu-btn img").attr('src', newsrc );
  });

  

});

