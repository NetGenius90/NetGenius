$(document).ready(function(){
    let navbar          = $('#nav-bar-container');
    let navLinks        = $('#nav-bar-links');
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
             lastScrollTop < nowScrollTop;
        }
    });

    // navbar toggler button
    let toggleBtn        = $('#toggle-button');
    let navbarLinks      = $('#nav-bar-links');   
    let closeBtn         = $('#close-button'); 
    // show data   
    $(toggleBtn).on('click' , function(e){
        e.preventDefault();
        navbarLinks.show();
       
    });
    // hide navbar
    $(closeBtn).on('click' , function (e) { 
        e.preventDefault();
        navbarLinks.hide();
     });







    });
 
