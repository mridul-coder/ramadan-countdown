$('#getting-started1').countdown('2020/04/23', function(event) {
   $(this).html(event.strftime('<div><span>%D</span><span> Days</span></div>'));
});

$('#getting-started2').countdown('2020/04/23', function(event) {
   $(this).html(event.strftime('<div><span>%H</span><span> Hours</span></div>'));
});

$('#getting-started3').countdown('2020/04/23', function(event) {
   $(this).html(event.strftime('<div><span>%M</span><span> Minutes</span></div>'));
});

$('#getting-started4').countdown('2020/04/23', function(event) {
   $(this).html(event.strftime('<div><span>%S</span><span> Seconds</span></div>'));
});
