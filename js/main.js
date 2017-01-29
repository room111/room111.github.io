var btns = document.querySelectorAll( 'button.mdc-button' );
for ( var i = 0, btn; btn = btns[ i ]; i++ ) {
  mdc.ripple.MDCRipple.attachTo( btn );
}
$("button.mdc-button").click(function() {
  var current = $(this);
  $("html").addClass("animated");
  $("html").addClass("fadeOut");
  setTimeout(function(){
    location.href = current.attr("data-href");
  },1000)
})