---
# front matter stuff
---

// function elementInViewport(i) {
//     var bounding = i.getBoundingClientRect();
//     var myElementHeight = i.offsetHeight;
//     var myElementWidth = i.offsetWidth;

//     if (bounding.top >= -myElementHeight 
//         && bounding.left >= -myElementWidth
//         && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
//         && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
//         return true;
//     } else {
//         return false;
//     }
// }

// $(document).ready(function () {
//     // add image description into 
//     var images = $('.project-image');
//     var image_container = $('#images_container');
//     // image_container.children(":first");
    
//     var options = {
//       sectionSelector: '.project-image',
//       targetSelector: '.nav-link',
//       offset: 0, // in pixels
//       hrefAttribute: 'href',
//       activeClass: 'actives',
//     }
//     // scrollSpy('nav', {
//     //   sectionSelector: '.project-image',
//     //   targetSelector: '.nav-link',
//     //   offset: 0, // in pixels
//     //   hrefAttribute: 'href',
//     //   activeClass: 'active',
//     // });

//     scrollSpy(document.getElementById('nav-div'), options);
//     // for (var scroll_obj of scroll_objs) {
//     //     if (elementInViewport(scroll_obj)) {
//     //         $(scroll_obj).animate({ 'opacity': '1' }, 1000);
//     //     } else {
//     //         hidden_scroll_objs.push($(scroll_obj));
//     //     }
//     // }

//     // $(window).scroll(function () {
//     //     for (var h_scroll_obj of hidden_scroll_objs) {
//     //       if (elementInViewport(h_scroll_obj[0])) {
//     //         $(h_scroll_obj).animate({ 'opacity': '1' }, 1000);
//     //       }
//     //     }
//     // });
// });
// element to detect scroll direction of
const $el = $("#images_container");

// initialize last scroll position
let lastX = $el.scrollLeft();
    
$el.on('scroll', function() {
    // get current scroll position
    const currX = $el.scrollLeft();
        
    // determine current scroll direction
    const x = (currX > lastX) ? 'right' : ((currX === lastX) ? 'none' : 'left');

    // do something here...
    console.log(x);

    // update last scroll position to current position
    lastX = currX;

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});