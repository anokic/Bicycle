$(document).ready(function() {

    $(".slide-down").click(function() {
        $(".slide-down-div").slideUp("slow");
        setTimeout(up, 800);
    })

    function up(){
      $(".slide-up-div").slideDown("slow");
    }
}), $(function() {
    new Swiper(".swiper-container", {
        loop: !0,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4e3
    })
});
