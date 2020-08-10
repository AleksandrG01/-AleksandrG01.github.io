
  $(".toggle_mnu").click(function(){
   $(this).toggleClass("on"); 
   $(".top_mnu").slideToggle();
 });

  $("a.scroll").click(function() {
    $.scrollTo($(".div"), 800, {
     offset: -90
   });
  });
  $("#about").click(function() {
    $.scrollTo($(".section_1"), 800, {
      offset: -6
    });
  });
  $("#amenities").click(function() {
    $.scrollTo($(".section_2"), 800, {
      offset: 90
    });
  });
  $("#price").click(function() {
    $.scrollTo($(".section_3"), 800, {
     offset: -6
   });
  });
  $("#kontakts").click(function() {
    $.scrollTo($(".section_5"), 800, {
      offset: 90
    });
  });
  $(".down").click(function() {
    $.scrollTo($(".section_1"), 800, {
      offset: -6
    });
  });
  $(".about").click(function() {
    $.scrollTo($(".section_1"), 800, {
      offset: -6
    });
  });
  $(".amenities").click(function() {
    $.scrollTo($(".section_2"), 800, {
      offset: 90
    });
  });
  $(".price").click(function() {
    $.scrollTo($(".section_3"), 800, {
      offset: -6
    });
  });
  $(".kontakts").click(function() {
    $.scrollTo($(".section_5"), 800, {
      offset: 90
    });
  });

