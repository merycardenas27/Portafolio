$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#navbar-main").addClass("navbar-small")
    } else {
        $("#navbar-main").removeClass("navbar-small")
    }
});
