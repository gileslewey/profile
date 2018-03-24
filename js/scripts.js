
//<!-- Can place script tags with JavaScript files here -->
//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//<!--facebook script-->

//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test
    (d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);
js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}    (document, 'script', 'twitter-wjs');
//</script>

//*Google Maps*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7385947, lng: -73.9873319},
    zoom: 17
  });
  var image = "img/blue-pushpin.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 40.7385947, lng: -73.9873319},
    map: map,
    icon: image
  });
}


//DOM ready
$(document).ready(function(){
  $(".message-box").on("keyup", function(){

//*Contact Section*
  var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
    //turns char-count into an html ID js can read

  if(charCount > 50) {
    $("#char-count").css("color", "red");
  }
  else {
    $("#char-count").css("color", "black");
  };
});


  $("#button").on("click", function() {
    if ($(".message-box").val() === "") {
       $("#text-area").css("border", "2px solid red");
    }
    else {
      var comment=$(".message-box").val();
      $("#visible-comment").html(comment);
      $(".message-box").hide();
      $("#message-box").css("border-color", "black");
    };
  //BETTER WAY  var isMessageBoxEmpty = $(".message-box").val()
  //   === ""; if (isMessageBoxEmpty) { $("#text-area").css("border", "2px solid red");
  //   console.log("works"); }
});
//*Contact Section*

//*Work Section*
for (var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-3 col-md-3'>\
      <a href='" + works[i].pic + "' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>" + works[i].title + "</p></span>\
        </a>\
    </div>\
  ");
    var images = $("#work img");
    if (2%i===0) {
    $(images[i]).css("border", "2px solid salmon");
  }
    else {
    $(images[i]).css("border", "2px solid DodgerBlue");
  };
    $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function () {
    $(".info", this).hide();
  });
 };
    return false;
});






//If the value (.val()) of the
//.message-box is equal to an empty string ""

//  <p>Work Project #1</p>\

//tips
//$(function () {
//$('[data-toggle="tooltip"]').tooltip();
//});

//$(function(){
//  $("#[item1]").tooltip();
//});

//$(function(){
//  $("#[item2]").tooltip();
//});

//$(function(){
//  $("#[item3]").tooltip();
//});


//smooth scrolling

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });
// end DOM
