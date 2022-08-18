import "../css/style.css";

const container = [...document.querySelectorAll(".container")];
const arrows = [...document.querySelectorAll(".arrow")];
const heading = document.querySelector(".container__heading");
const text = document.querySelector(".container__text");
const arrowsContainer = [...document.querySelectorAll(".container__arrows")];
const sectionContainer = [...document.querySelectorAll(".container__sections")];
const heading2 = document.querySelector(".container__heading2");
const text2 = document.querySelector(".container__text2");

heading.style.opacity = "1";
heading.style.transform = "translateY(0px)";

text.style.opacity = "1";
text.style.transform = "translateY(0px)";

arrowsContainer[0].style.opacity = "1";
arrowsContainer[0].style.transform = "translateY(0px)";

sectionContainer[0].style.opacity = "1";
sectionContainer[0].style.transform = "translateY(0px)";

arrows.map((value) => {
  value.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains("disabled")) {
      return;
    }

    changeScreen(e);
  });
});

function changeScreen(e) {
  const target = e.target;
  if (target.id === "toward") {
    container[0].style.margin = "100px 0 0 -50%";
    container[1].style.margin = "100px 50% 0 100px";

    heading2.style.opacity = "1";
    heading2.style.transform = "translateY(0px)";

    text2.style.opacity = "1";
    text2.style.transform = "translateY(0px)";
    arrowsContainer[1].style.opacity = "1";
    arrowsContainer[1].style.transform = "translateY(0px)";
    sectionContainer[1].style.opacity = "1";
    sectionContainer[1].style.transform = "translateY(0px)";

    document.body.style.backgroundColor = "#8675BA";
  }

  if (target.id === "backward") {
    container[0].style.margin = "100px 0 0 100px";
    container[1].style.margin = "100px 0 0 100px";
    document.body.style.backgroundColor = "#8DBDBA";
  }
}

const boxElems = [...document.querySelectorAll(".container__eclipse-box")];
const initCoords = [{ left: 0, top: 0 }];

boxElems.map((value) => {
  const pointerElem = value.childNodes[1];
  value.addEventListener("mousemove", function (e) {
    pointerElem.style.top = e.clientY - 300 + "px";
    pointerElem.style.left = e.clientX - 700 + "px";
  });

  value.addEventListener("mouseout", function () {
    pointerElem.style.top = "0px";
    pointerElem.style.left = "0px";
  });
});
