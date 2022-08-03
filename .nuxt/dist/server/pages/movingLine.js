exports.ids = [6];
exports.modules = {

/***/ 378:
/***/ (function(module, exports) {

$(function () {
  $(".square1").animate({
    width: "100",
    height: "100"
  }, 1000, function () {
    console.log("1번끝");
  });
});
$(document).ready(function () {
  $(".square2").animate({
    width: "100",
    height: "100"
  }, 2000, function () {
    console.log("2번끝");
  });
});
$(document).ready(function () {
  $(".square3").animate({
    width: "100",
    height: "100"
  }, 3000, function () {
    console.log("3번끝");
  });
});
$(document).ready(function () {
  $(".square4").animate({
    width: "100",
    height: "100"
  }, 4000, function () {
    console.log("4번끝");
  });
});

/***/ })

};;
//# sourceMappingURL=movingLine.js.map