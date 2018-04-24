$(document).ready(function() {

//*JQuery #1:click #2:fadeOut #3:fadeIn #4:slideUp #5:slideDown*//
$("#founder_pic").click(function() {
  $(".ktli").fadeOut(100).fadeIn(300);
  $(".ktli").slideUp(600).slideDown(500);

});

//*JQuery #6:css*//
$("#page_container").css("background-color", "none");


});
