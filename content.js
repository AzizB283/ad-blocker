document.addEventListener("DOMContentLoaded", function () {
  // Example: Hide elements with class 'ad'
  var ads = document.querySelectorAll(".ad");
  ads.forEach(function (ad) {
    ad.style.display = "none";
  });
});
