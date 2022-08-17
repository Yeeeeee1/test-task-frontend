import "../css/style.css";

// document.body.style.backgroundColor = localStorage.getItem("backgroundColor");

const container = [...document.querySelectorAll(".container")];
const arrows = [...document.querySelectorAll(".arrow")];

document.querySelector(".container__heading").style.opacity = "1";
document.querySelector(".container__heading").style.transform =
  "translateY(0px)";

document.querySelector(".container__text").style.opacity = "1";
document.querySelector(".container__text").style.transform = "translateY(0px)";
[...document.querySelectorAll(".container__arrows")][0].style.opacity = "1";
[...document.querySelectorAll(".container__arrows")][0].style.transform =
  "translateY(0px)";
[...document.querySelectorAll(".container__sections")][0].style.opacity = "1";
[...document.querySelectorAll(".container__sections")][0].style.transform =
  "translateY(0px)";

arrows.map((value) => {
  value.addEventListener("click", function (e) {
    if (e.target.classList.contains("disabled")) {
      return;
    }

    changeScreen(e);
  });
});

function changeScreen(e) {
  if (e.target.id === "toward") {
    container[0].style.margin = "100px 0 0 -50%";
    container[1].style.margin = "100px 50% 0 100px";
    document.querySelector(".container__heading2").style.opacity = "1";
    document.querySelector(".container__heading2").style.transform =
      "translateY(0px)";

    document.querySelector(".container__text2").style.opacity = "1";
    document.querySelector(".container__text2").style.transform =
      "translateY(0px)";
    [...document.querySelectorAll(".container__arrows")][1].style.opacity = "1";
    [...document.querySelectorAll(".container__arrows")][1].style.transform =
      "translateY(0px)";
    [...document.querySelectorAll(".container__sections")][1].style.opacity =
      "1";
    [...document.querySelectorAll(".container__sections")][1].style.transform =
      "translateY(0px)";

    document.body.style.backgroundColor = "#8675BA";
  }

  if (e.target.id === "backward") {
    container[0].style.margin = "100px 0 0 100px";
    container[1].style.margin = "100px 0 0 100px";
    document.body.style.backgroundColor = "#8DBDBA";
  }

  localStorage.setItem("backgroundColor", document.body.style.backgroundColor);
}

const pointerElem = document.querySelector(".container__eclipse");
const boxElem = document.querySelector(".container__eclipse-box");

boxElem.addEventListener("mousemove", function (e) {
  pointerElem.style.top = e.clientY - 100 + "px";
  pointerElem.style.left = e.clientX - 400 + "px";
});
