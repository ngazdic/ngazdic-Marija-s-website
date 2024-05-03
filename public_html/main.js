/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


//showing name and "interesteing in cooperation" in the about me section

$(document).ready(function () {
    function animation() {
        let windowHeight = $(window).height(); 
        let scroll = $(window).scrollTop(); 
        $('.animation').each(function () {
            
            let position = $(this).offset().top; 
            let animationName = $(this).attr('data-animation'); 
            let delay = $(this).attr('data-delay'); 
            if (position < windowHeight + scroll) {
               
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay); 
            }
        });
    }

    $(window).on('scroll', function () {
        animation();
    });
    animation();
    
    
    
    //spining 90 and 45 degrees plus icon on phone and tablet in navbar
    
    $('.navbar-toggler').click(function(){
        
        
  
    if ($('#minus').hasClass('rotate-45')) {
        $('#minus').removeClass('rotate-45').addClass('rotate-90');
    } else {
        $('#minus').removeClass('rotate-90').addClass('rotate-45');
    }
});
       
       
       
     
        
        
        
    });
    
    

 