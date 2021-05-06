var slideIndex = 1;
showDivs(slideIndex);



function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("heroslide");
  //var y = document.getElementsByClassName("heroblurslide");
  var dots = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     //y[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" white", "");
  }
  x[slideIndex-1].style.display = "block";
  //y[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " white";

}

function toggleHammenu() {
    document.getElementById("hammenu").classList.toggle("show");
}
function toggleProgram() {
    document.getElementById("mob_program").classList.toggle("show");
}
function toggleSi() {
    document.getElementById("mob_si").classList.toggle("show");
}
function toggleAbout() {
    document.getElementById("mob_about").classList.toggle("show");
}


setInterval(function(){plusDivs(1) }, 6000);

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
