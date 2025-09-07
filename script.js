$(document).ready(function() {


    const homePage = $('#first-page')
    const neonCityPage = $('#page-two')
    const chillZonePage = $('#page-three')
    const navButtons = $('#nav-list li').toArray(); //First page navbar
    const [homeBtn, neonCityBtn, catalogBtn, chillZoneBtn] = navButtons;
    const secondPageNavButtons = $('#page-two-navbar li').toArray()
    const thirdPageNavButtons = $('#page-three-navbar li').toArray()
    const thirdPageNavbar = $('#page-three-navbar')

    const dropdownBtn = $("#dropdown-button")

    const homeBtns = [navButtons[0], secondPageNavButtons[0], thirdPageNavButtons[0]]
    const chillzoneBtns = [navButtons[3], secondPageNavButtons[2]]
    const neonCityBtns = [navButtons[1], thirdPageNavButtons[2]]

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

    // Looping through all of the buttons for the sake of the DRY rule
    $.each(chillzoneBtns, function (i, el) { 
        $(el).click(() => {
            scrollToElement(chillZonePage)
        })         
    });
        
    $.each(homeBtns, function (i, el) { 
        $(el).click(() => {
            scrollToElement(homePage)
        })         
    });
        
    $.each(neonCityBtns, function (i, el) { 
        $(el).click(() => {
            scrollToElement(neonCityPage)
        })         
    });

        

    // $(neonCityBtn).click(function () {
    //     dropdownBtn.click()
    //     scrollToElement(neonCityPage)
    // })


// Want to add a function that will check if the user is on page 3 and will inject 
// a home button which will scroll the user back to the top


const scrollToElement = (element) => {  //Service function to scroll to element upon clicking
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 100)
}

$(window).on('scroll', () => {
    
    // Calculating the page three top position
    const pageThreeTop = chillZonePage.offset().top // Wonder what does that return
    // Calculating the bottom of the viewport
    const bottomLine = $(window).scrollTop() + $(window).height() - 200

    // Checking if the bottom is lower than the page three
    if (pageThreeTop < bottomLine) {
        // Make an animation
        thirdPageNavbar.parent().removeClass('transparent')
    } else {
        thirdPageNavbar.parent().addClass('transparent')
    }
})


})

