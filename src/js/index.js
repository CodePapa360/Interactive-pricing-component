"use strict";
import "../sass/main.scss";

const root = document.documentElement;
const form = document.querySelector(".form");
const totalAmountOutput = document.getElementById("total-amount");
const pageViewOutput = document.getElementById("page-view-text");
const slider = document.getElementById("price-range");
const durationCheckbox = document.getElementById("duration-checkbox");
const durationText = document.getElementById("duration-text");
const views = ["10k", "50k", "100k", "500k", "1M"];
const allCosts = [4, 8, 16, 24, 36];

const renderOutputs = function () {
  const inputedRange = +slider.value;
  const yearly = durationCheckbox.checked;
  let totalCost = allCosts[inputedRange];

  //Slider filled up value chnaging
  const value = ((inputedRange - slider.min) / (slider.max - slider.min)) * 100;
  root.style.setProperty("--slider-value", value + "%");

  if (yearly) {
    const months = totalCost * 12;
    const discounted = months - (months * 25) / 100;
    totalCost = discounted;
  }

  durationText.textContent = yearly ? "year" : "month";
  totalAmountOutput.textContent = `$${totalCost}.00`;
  pageViewOutput.textContent = views[inputedRange];
  return;
};
renderOutputs();

slider.addEventListener("input", function () {
  renderOutputs();
});

durationCheckbox.addEventListener("change", function () {
  renderOutputs();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
