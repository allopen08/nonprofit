jQuery(document).ready(function () {
    'use strict';
    $(".nav_l > li").hover(function () {
        
        $(".submenu").stop().slideDown(300);
    
    }, function () {
        
    $(".submenu").stop().slideUp(300);});
});





