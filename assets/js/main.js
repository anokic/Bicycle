$(document).ready(function() {
  var done = false;
  $('.navbar-toggler').click( () => {

      clicks();

    })

    $('.close-toggle').click( () => {
        clicks();
    })

    function clicks(){

      if(done == false){
        $('.nav-item')[2].remove();
        done = true;
      }

      $('.navbar-collapse.order-2.nav.collapse.show').toggleClass('move-nav');
      let items = $('.nav-item');
      let i = 1;

      for(item of items){
        let css = 'all ' + ( i / 4) + 's ease-out';
        $($(item)).css( {'transition' : css});
        item.style.transition = css;
        i++;
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
