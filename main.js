/** Add hamburger menu hide and show */
function toggleMenuBtnVisibility() {
    console.log("running menu btn visibility");
    $(".hamburger-icon").on("click",function(event){
        event.preventDefault();
        $('#nav-top').toggleClass('open-menu');
        $('.menu-links').toggleClass('open-menu');
        console.log(`Class toggled: ${$('#nav-top').attr('class')}`);
    });
}

function toggleOpenMenuVisibility() {
    $(".menu-links").on("click", function(event){
        $('.menu-links').removeClass('open-menu');
        $('#nav-top').removeClass('open-menu');
    });
}

function portfolio() {
   toggleMenuBtnVisibility();
   toggleOpenMenuVisibility(); 
}

$(portfolio);