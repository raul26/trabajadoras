$(document).ready(function(){
  $('.content').hide();
  $('#menu').mouseenter(function  () {
    $('#sub-menu').show();
  })
  $('#cont').mouseleave(function  () {
    $('#sub-menu').hide();
  })
});
