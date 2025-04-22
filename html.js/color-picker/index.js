function changeBackground() {
  let myColor = document.getElementById("colorPicker");
  let colorValue = myColor.value;
  document.body.style.backgroundColor = colorValue;
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  button.style.backgroundColor = "blue";
  button.style.color = "white";

  button.addEventListener("click", function () {
    console.log("Button Clicked");
  });
});

document.addEventListener("dblclick", function () {
  console.log("Double Click");
});

document.addEventListener("click", function () {
  console.log("click");
});
