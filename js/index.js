$().ready( _=> {
  //Cambiar estilos del navbar al activarse el scroll
  $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 100) {
          $("#navbar-main").addClass("navbar-small")
      } else {
          $("#navbar-main").removeClass("navbar-small")
      }
  });
  //Cargar estilos y transiciones de la galería
  $(function() {
    $('#dg-container').gallery();
  });
});
