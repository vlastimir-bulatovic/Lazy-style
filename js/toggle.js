var $click = $('.click');//clicking area
var content   = '.toogle-content';// content to toogle

$click.click(function () {
  $(this).next(content).slideToggle();
  $(this).parent().siblings().children().next().slideUp();
  return false;
});