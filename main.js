"use strict";

$("#submit").click(() => {
  const value = $("#textContent").val();
  $("#text").text(value);
  const widthText = $("#text").width();
  const maxWidth = $(window).outerWidth() > 425 ? 200 : 150;
  console.log("maxWidth :>> ", maxWidth);
  if (widthText > 200) {
    $("i").css(
      "font-size",
      `${widthText > $(window).outerWidth() ? widthText + 40 : maxWidth}px`
    );
  } else {
    $("i").css("font-size", `${maxWidth}px`);
  }
});
