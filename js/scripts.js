
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

//DOM ready
$(document).ready(function(){
  //alert("Document is ready!");
  $(".message-box").on("keyup", function(){
    //console.log("keyup works");


  var charCount = $(".message-box").val().length;
  //var messageValid = $(".message-box").val()
  //count length value of message-box
    console.log(charCount);
    //gives var charCount in console
    $("#char-count").html(charCount);
    //$("#message-valid").html(messageValid);
    //turns char-count into an html ID js can read

  if(charCount > 50) {
    //does what follows if need to be in parens?

    $("#char-count").css("color", "red");
  }
  else {
    //else not a pair, outside {}
    $("#char-count").css("color", "black");
  };

});


//not breaking it now anyway
  $("#button").on("click", function() {

    if ($(".message-box").val() === "") {
       $("#text-area").css("border", "2px solid red");
       //console.log(works);
    }
    else {
      var comment=$(".message-box").val();
      $("#visible-comment").html(comment);
      $(".message-box").hide();
      $("#message-box").css("border-color", "black");
    };
});
//works section
for (var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-md-3 col-xs-6 col-margin'>\
     <img class='img-responsive' src='" + works[i] + "'>\
    </div><!-- / col -->\
  ");
    var images = $("#work img");
    if (2%i===0) {
    $(images[i]).css("border", "2px solid salmon");
  }
    else {
    $(images[i]).css("border", "2px solid DodgerBlue");
  };
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
