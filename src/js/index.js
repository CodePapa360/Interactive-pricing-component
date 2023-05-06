"use strict";
import "../sass/main.scss";
const totalAmountOutput = document.getElementById("total-amount");
const pageViewOutput = document.getElementById("page-view-text");

const slider = document.getElementById("price-range");

//////////////////////////

const totalAmount = function (range) {
  const value = 8;
  const count = value * (range + 1);
  // console.log(count);
  return count;
};

const views = function (range) {
  const value = 33.333333333;
  const count = value * (range + 1);

  return Math.round(count);
};

///////////////
slider.addEventListener("input", function () {
  const inputedRange = +slider.value;

  totalAmountOutput.textContent = `$${totalAmount(inputedRange)}.00`;

  pageViewOutput.textContent = views(inputedRange);
});
