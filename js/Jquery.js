 $(document).ready(function() {
            $(document).on('scroll', function(){
            if ( $(window).scrollTop() > 70) {
                $('#scroll_top').addClass('bg');
            } else {
                $("#scroll_top").css({"transition":".7s"})
                $('#scroll_top').removeClass('bg');
            }
            });
     
       
            var typed = new Typed('.textAnim', {
                  strings: ['Freelancer', 'Web Desginer','Web Devloper'],
                  typeSpeed: 100,
                  backSpeed :100,
                loop:true
                });
        AOS.init({
            duration: 1000,
        });
        });
