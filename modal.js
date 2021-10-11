$(function() {
    $('button.link-modal').click( function(event){
      event.preventDefault();
      $('.overlay').fadeIn(250,	function(){
        $('.modal').css('display', 'block').animate({opacity: 1}, 450);
    });
    });
  
    $('.close, .overlay').click( function(){
      $('.modal').animate({opacity: 0}, 450, function(){
        $(this).css('display', 'none');
        $('.overlay').fadeOut(250);
      });
    });
  });
        