define(["jquery"], function($) {
  $(document).ready(function() {
    $('#ninety-five').click(function() {

        ga('send', {
            hitType: 'event',
            eventCategory: 'Announcement',
            eventAction: 'close',
            eventLabel: 'announcement'
        });

        $(this).fadeOut(200, function() {
            $(this).remove();

            $('body').animate({
                paddingTop: 0
            }, 200);
        });
    });
  });
});
