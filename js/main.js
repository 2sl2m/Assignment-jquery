$("#Close").on("click", function () {
  $("#Navs").animate({ left: -200 }, 500);
});
$("#openBtn").on("click", function () {
  $("#Navs").animate({ left: 0 }, 500);
});

var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#taimer").text();
  } else {
    $("#taimer").text(AmountLeft);
  }
});

$(".home .nav a").on("click", function () {
  let sectionOffset = $($(this).attr("href")).offset().top;
  $("body,html").animate({ scrolltop: sectionOffset }, 2000);
});
