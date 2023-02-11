(function ($) {
  "use strict";
  $(document).ready(function () {
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");
    bodyOvrelay.on("click", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", "#search", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });
    $(document).on(
      "click",
      ".navbar-area .navbar-nav li.menu-item-has-children>a",
      function (e) {
        e.preventDefault();
      }
    );
    var serviceSlider = $(".indurance-services-slider");
    if (serviceSlider.length > 0) {
      serviceSlider.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="prev-arrow fa fa-angle-left"></i>',
        nextArrow: '<i class="next-arrow fa fa-angle-right"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false },
          },
          {
            breakpoint: 576,
            settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
          },
        ],
      });
    }
    new WOW().init();
    $(".back-to-top").on("click", function () {
      $("html").animate({ scrollTop: "0" }, 2000);
    });
    var videoPlayBtn = $(".video-play-button a");
    if (videoPlayBtn.length > 0) {
      videoPlayBtn.magnificPopup({ type: "iframe" });
    }
    var numberCounterup = $(".number-counting");
    if (numberCounterup.length > 0) {
      numberCounterup.counterUp({ delay: 20, time: 1000 });
    }
    var partnerSlider = $(".indurance-partners-slider");
    if (partnerSlider.length > 0) {
      partnerSlider.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        ],
      });
    }
    var testimonialSlider = $(".indurance-testimonial-slider");
    if (testimonialSlider.length > 0) {
      testimonialSlider.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    }
    var newsSlider = $(".indurance-news-slider");
    if (newsSlider.length > 0) {
      newsSlider.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="prev-arrow fa fa-angle-left"></i>',
        nextArrow: '<i class="next-arrow fa fa-angle-right"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
          },
          {
            breakpoint: 576,
            settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
          },
        ],
      });
    }
    var recentCaseStudyFilter = $(".recent-case-study-filter-area");
    var caseStudyFIlterNav = $(".indurance-project-tab li");
    if ($(".project-area").length > 0) {
      recentCaseStudyFilter.imagesLoaded(function () {
        var $grid = $(".grid").isotope({
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        });
        caseStudyFIlterNav.on("click", function () {
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({ filter: filterValue });
        });
      });
      caseStudyFIlterNav.on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
    }
  });
  var lastScrollTop = "";
  $(window).on("scroll", function () {
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }
  });
  $(window).on("load", function () {
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);
  });
})(jQuery);
