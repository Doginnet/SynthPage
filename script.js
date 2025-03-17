$(document).ready(function() {


$('#nav-list > li').on('mouseover', function(){
    $(this).css('borderBottom', '1px solid white')
    $(this).css('text-shadow', '1px 1px 10px white')
}).on('mouseleave', function() {
    $(this).css('borderBottom', '')
    $(this).css('text-shadow', '')
})
/*
$('.down-dropper').click(function(){
    if($("#hero-page").is(":visible")) {
       $("#hero-page").slideUp();
    } else {
       $("#hero-page").slideDown();
    }
})

*/


})