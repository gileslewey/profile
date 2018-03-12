
<!-- Can place script tags with JavaScript files here -->
//facebook
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script><!--facebook script-->

//twitter
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test
    (d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);
      js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}
      (document, 'script', 'twitter-wjs');</script>
</script>

//DOM ready
$(document).ready(function(){


<script>
//tooltips
$(function () {
$('[data-toggle="tooltip"]').tooltip();
});
</script>
<script>
$(function(){
  $("#[item1]").tooltip();
});
</script>
<script>
$(function(){
  $("#[item2]").tooltip();
});
</script>
<script>
$(function(){
  $("#[item3]").tooltip();
});
</script>
//smooth scrolling
<script type="text/javascript">
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
