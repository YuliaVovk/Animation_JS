let result = document.querySelector(".result");
let input = document.querySelector("input[name='level1']");
input.addEventListener("keyup", function () {
  result.innerHTML = input.value;
});
let button = document.querySelector("button");
let result2 = document.querySelector(".result2");
let input2 = document.querySelector("input[name='level2']");
button.addEventListener("click", function () {
  result2.innerHTML = input2.value;
});
