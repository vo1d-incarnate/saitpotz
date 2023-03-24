
(function($) {
    $(document).ready(function() {
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            
            $('.video-background').addClass(
                'video-background-default-image');
        }
    });
})(jQuery);


$('#clock').countdown('2023/04/12').on('update.countdown', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<div><span>%-w</span>week%!w</div>'
         + '<div><span>%-d</span>day%!d</div>'
         + '<div><span>%H</span>hr</div>'
         + '<div><span>%M</span>min</div>'
         + '<div><span>%S</span>sec</div>'));
     });