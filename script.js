$(document).ready(function() {
const chillZonePage = $('#page-three')
const neonCityPage = $('#page-two')
const navButtons = $('#nav-list li').toArray();
const [homeBtn, neonCityBtn, catalogBtn, chillZoneBtn] = navButtons;
const dropdownBtn = $("#dropdown-button")



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
$(chillZoneBtn).click(function () {
    scrollToElement(chillZonePage)
});
$(neonCityBtn).click(function () {
    dropdownBtn.click()
    scrollToElement(neonCityPage)
})





const scrollToElement = (element) => {  //Service function to scroll to element upon clicking
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 100)
}
})