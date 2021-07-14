$(document).ready(function() {
	$('body').fadeIn(1500);
});

var selector = '.nav ul li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});