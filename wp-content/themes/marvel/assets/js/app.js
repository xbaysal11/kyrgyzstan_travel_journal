// $(window).on('load', function () {
//     $preloader = $('.loaderArea'),
//       $loader = $preloader.find('.loader');
//     $loader.fadeOut();
//     $preloader.delay(280).fadeOut('slow');
//   });

$("#lang a").click(function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".hover").mouseleave(function() {
  $(this).removeClass("hover");
});

checkWidth();
function checkWidth() {
  var windowWidth = $("body").innerWidth(),
    elem1 = $(".tours__menu_tab"),
    elem2 = $(".kgdays__menu_tab");
  if (windowWidth > 500) {
    elem1.removeClass("swiper-wrapper");
    elem2.removeClass("swiper-wrapper");
  }
}

$(document).ready(function() {
  var $menu = $("#js_sticky-menu");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $menu.hasClass("js_default")) {
      $menu.removeClass("js_default").addClass("js_fixed");
    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("js_fixed")) {
      $menu.removeClass("js_fixed").addClass("js_default");
    }
  });
  filterTab("tab1");
  filterKgTab("kgtab1");
});

$(document).ready(function() {
  $(".js-slick_welcome-slider").slick({
    nextArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: false,
    dots: true
  });
});

$(document).ready(function() {
  $(".js-slick_spec-tours").slick({
    nextArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".kg-main-slider--js").slick({
    nextArrow:
      '<img src="tours/wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="tours/wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: true,
    dots: false
  });
});

$(document).ready(function() {
  $(".kgtour-main-slider--js").slick({
    nextArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: true,
    dots: false
  });
});

$(document).ready(function() {
  $(".blog-main-slider--js").slick({
    nextArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: true,
    dots: false
  });
});

$(document).ready(function() {
  $(".promotions-main-slider--js").slick({
    nextArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
    prevArrow:
      '<img src="wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">',
    autoplay: true,
    dots: false
  });
});

//Табы популярные туры
$(".tours__menu_tab li").click(function() {
  $(".tours__menu_tab li").removeClass("active");
  $(this).addClass("active");
  var tabv = this.getAttribute("data-tab");
  filterTab(tabv);
});

function filterTab(thisTab) {
  if (filterTab != thisTab) {
    $("figure")
      .filter("." + thisTab)
      .show();
    $("figure")
      .filter(":not(." + thisTab + ")")
      .hide();
  }
}

//Табы туры КР
$(".kg-tours__menu_tab li").hover(function() {
  $(".kg-tours__menu_tab li").removeClass("active");
  $(this).addClass("active");
  var tabv = this.getAttribute("data-tab");
  filterKgTab(tabv);
});

function filterKgTab(thisTab) {
  if (filterKgTab != thisTab) {
    $(".kg-tours-cards--item")
      .filter("." + thisTab)
      .show();
    $(".kg-tours-cards--item")
      .filter(":not(." + thisTab + ")")
      .hide();
    $(".kg-tours__title p")
      .filter("." + thisTab)
      .show();
    $(".kg-tours__title p")
      .filter(":not(." + thisTab + ")")
      .hide();
  }
}

// Модальные окна
function openModal(modalPath) {
  $.fancybox.open({
    src: modalPath,
    modal: true,
    opts: {
      clickOutside: "close",
      touch: false,
      toolbar: false
    }
  });
}
// (function() {
//   var $trigger = $(".js-modal");

//   if ($trigger) {
//     $trigger.on("click", function(e) {
//       e.preventDefault();
//       openModal($(this).attr("data-src"));
//     });
//   }
// })();

//что включено в тур, выплывашка, модалки туры
$(".included").click(function() {
  // $( ".included-content" ).toggle(200,'linear');
  $(".included-content")
    .toggleClass("active")
    .siblings()
    .removeClass("active");
  $(this)
    .toggleClass("active")
    .siblings()
    .removeClass("active");
  $(".included img")
    .toggleClass("active")
    .siblings()
    .removeClass("active");
});

//фотогрфии таба описания, модалки туры
$(".img").each(function() {
  $(this)
    .find("img")
    .click(function() {
      $(".full-image")
        .find("img")
        .attr("src", $(this).attr("src"));
    });
});

$(document).ready(function() {
  $("#Map2 area").hover(function() {
    var vobl = this.getAttribute("data-tab");
    $(".obl").removeClass("active");
    $(".obl" + "." + vobl).addClass("active");
  });
});

// кг туры --таб дней
$(".kgdays-tab").click(function() {
  $(".kgdays-tab").removeClass("active");
  console.log("123");
  $(this).addClass("active");
  var kgtab = this.getAttribute("data-tab");
  $(".day-content").removeClass("active");
  $(".day-content" + "-" + kgtab).addClass("active");
});

//моб меню
$(".burger, .overlay").click(function() {
  $("main").toggleClass("open");
  $(".burger").toggleClass("open");
  $(".overlay").fadeToggle();
});

//скрыть/раскрыть
let knowMoreButtonKG = $(".morekg"),
  hideTextKG = knowMoreButtonKG.attr("data-alt-text"),
  showTextKG = knowMoreButtonKG.text();
let countKG = 0;

knowMoreButtonKG.removeAttr("data-alt-text").click(function() {
  if (countKG === 0) {
    $(this).text(hideTextKG);
    countKG++;
  } else {
    $(this).text(showTextKG);
    countKG = 0;
  }
  $(".description-hidden-kg").slideToggle();
  return false;
});

let knowMoreButtonM = $(".morem"),
  hideTextM = knowMoreButtonM.attr("data-alt-text"),
  showTextM = knowMoreButtonM.text();
let countM = 0;

knowMoreButtonM.removeAttr("data-alt-text").click(function() {
  if (countM === 0) {
    $(this).text(hideTextM);
    countM++;
  } else {
    $(this).text(showTextM);
    countM = 0;
  }
  $(".description-hidden-m").slideToggle();
  return false;
});

var promoNavSlider = new Swiper(".js-tours-nav-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true
});

var promoNavSlider = new Swiper(".js-kgtours-timeline-nav-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true
});

var kgCategories = new Swiper(".js-kgtours-nav-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true
});

//отзывы кг тур
$(document).ready(function() {
  $(".review-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".review-slider-nav"
  });
  $(".review-slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".review-slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          arrows: true,
          nextArrow:
            '<img src="../wp-content/themes/marvel/img/akirova.com/svg/arrow-right.svg" class="slick-next">',
          prevArrow:
            '<img src="../wp-content/themes/marvel/img/akirova.com/svg/arrow-left.svg" class="slick-prev">'
        }
      }
    ]
  });
});

//геллеря кг тура
$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this)
      .find("img")
      .attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function() {
    var windowWidthImg = $("body").innerWidth();
    if (windowWidthImg > 600) {
      let w = $(this).outerWidth();
      let h = $(this).outerHeight();
      let x = $(this).offset().left;
      let y = $(this).offset().top;

      $(".active")
        .not($(this))
        .remove();
      let copy = $(this).clone();
      copy
        .insertAfter($(this))
        .height(h)
        .width(w)
        .delay(500)
        .addClass("active");
      $(".active").css("top", y - 8);
      $(".active").css("left", x - 8);

      setTimeout(function() {
        copy.addClass("positioned");
      }, 0);
    }
  });
});

$(document).on("click", ".img-c.active", function() {
  let copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function() {
    copy.remove();
  }, 500);
});
