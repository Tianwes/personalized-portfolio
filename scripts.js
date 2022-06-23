$('button').on('click', function(){
  $('body').toggleClass('open');
  
});
$('li').on('click', function(){
  $('body').toggleClass('open');
});

$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
