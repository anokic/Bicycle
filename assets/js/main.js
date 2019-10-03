$(document).ready(function() {
  var done = false;
  $('.navbar-toggler').click( () => {

      clicks();

    })

    $('.close-toggle').click( () => {
        clicks();
    })

    function clicks(){



      $('.navbar-collapse.order-2.nav.collapse.show').toggleClass('move-nav');
      let items = $('.nav-item');
      let i = 1;

      for(item of items){
        if(i >= 3){
          let css = 'all ' + ((i - 1) / 6) + 's ease-out';
          console.log(((i - 1) / 4));
          $($(item)).css( {'transition' : css});
          item.style.transition = css;
          i++;
        } else {
          let css = 'all ' + ( i / 6) + 's ease-out';
          $($(item)).css( {'transition' : css});
          item.style.transition = css;
          i++;
        }
      }

      function toggle(){
        $('.nav.navbar-nav.d-flex.cl-effect-12').toggleClass('ul-show');
        $('.close-toggle').toggleClass('close-toggle-show');
      }

      setTimeout(toggle, 800);

    }

    $(".slide-down").click(function() {
        $(".slide-down-div").slideUp("slow");
        setTimeout(up, 800);
    })

    function up(){
      $(".slide-up-div").slideDown("slow");
    }
}),

$(function() {
    new Swiper(".swiper-container", {
        loop: !0,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4e3
    })
});
