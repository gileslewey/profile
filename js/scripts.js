
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

  $("#button").on("click", function() {
    var comment=$(".message-box").val();
    $("#visible-comment").html(comment);
    $(".message-box").hide();
    return false;
  });

  $(".message-box").on("keyup", function() {

  });
//tooltips
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
});
