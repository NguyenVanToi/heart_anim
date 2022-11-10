"use strict";

$("#submit").click(() => {
  const value = $("#textContent").val();
  $("#text").text(value);
  const widthText = $("#text").width();
  if (widthText > 200) {
    $("i").css("font-size", `${widthText + 40}px`);
  } else {
    $("i").css("font-size", `${200}px`);
  }
});
