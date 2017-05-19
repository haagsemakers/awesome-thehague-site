$(document).ready(function() {

  // Hightlight current page link in navigation menu
  var currentPage = $("body").data("current-page");
  if (currentPage) {
    $("a[data-page-id='" + currentPage + "']").addClass("active");
  }
});
