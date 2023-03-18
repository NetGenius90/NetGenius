$(document).ready(function(){
    let navbar          = $('#nav-bar-container');
    let navLinks        = $('#navlinks');
    let brand           = $('#brand')
    let signBtn         = $('#sign');    
    var lastScrollTop = 10, delta = 5;
    // scroll fuction
    
    $(window).scroll(function(){
        var nowScrollTop = $(this).scrollTop();
        if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
            if (nowScrollTop > lastScrollTop){
              
                navbar.addClass('navbar-next');
                navLinks.addClass('a');
                brand.addClass('a');
                signBtn.addClass('a');

            } else {
                navbar.removeClass('navbar-next');
                navLinks.removeClass('a');
                brand.removeClass('a');
                signBtn.removeClass('a');
           }
             lastScrollTop = nowScrollTop;
        }
    });

  







    });
 
