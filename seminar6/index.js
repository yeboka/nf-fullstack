var plans = {
  planA: false,
  planB: false,
  planC: false,
  planD: false,
};

$(document).ready(function () {
  function second_passed() {
    $(".clock").removeClass("is-off");
  }
  setTimeout(second_passed, 2000);

  $(".switcher").on("click", function (e) {
    e.preventDefault();
    $(".screen").toggleClass("glitch");
  });

  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval(function () {
    var hours = new Date().getHours();
    var seconds = new Date().getSeconds();
    var minutes = new Date().getMinutes();

    var realTime =
      (hours < 10 ? "0" : "") +
      hours +
      " : " +
      (minutes < 10 ? "0" : "") +
      minutes +
      " : " +
      (seconds < 10 ? "0" : "") +
      seconds;

    $(".time").html(realTime);
    $(".time").attr("data-time", realTime);
  }, 1000);
});

function replace(hide, show, event) {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const div3 = document.getElementById("div3");
  const div4 = document.getElementById("div4");

  if (window.plans.planA && div1.style.display !== "none") {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
  }
  if (window.plans.planB && div2.style.display !== "none") {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
  }
  if (window.plans.planC && div3.style.display !== "none") {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
  }
  if (window.plans.planD && div4.style.display !== "none") {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
  }
}
