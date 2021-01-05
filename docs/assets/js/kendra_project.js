$(document).ready(function(){
    $('.project-images').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        accessibility: true,
        appendArrows: $('.project-image-nav')
    });
});