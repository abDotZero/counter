// initial value counter 0

let counter = 0;

let screenWatch = document.querySelector("#screen");
let clickBtn = document.querySelectorAll(".btn");

clickBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("disncrease")) {
      counter--;
    } else if (style.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    // code for color change

    // color for red
    if (counter < 0) {
      screenWatch.style.color = "crimson";
      if (counter <= -21) {
        screenWatch.style.color = "firebrick";
      }
      if (counter <= -31) {
        screenWatch.style.color = "red";
      }
    }

    // color for green
    if (counter > 0) {
      screenWatch.style.color = "green";
    }
    // color for blue
    if (counter === 0) {
      screenWatch.style.color = "blueviolet";
    }

    screenWatch.textContent = counter;
  });
});
