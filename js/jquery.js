$(document).ready(() =>{
    $sidebar = $('.sidebar');
    $toggle = $('.toggle');

    $toggle.click(() =>{
        $sidebar.toggleClass('collapse')
    })
});