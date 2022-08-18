const container = [...document.querySelectorAll<HTMLElement>(".container")];
const arrows = [...document.querySelectorAll<HTMLElement>(".arrow")];
const heading = document.querySelector<HTMLElement>(".container__heading");
const text = document.querySelector<HTMLElement>(".container__text");
const arrowsContainer = [
  ...document.querySelectorAll<HTMLElement>(".container__arrows"),
];
const sectionContainer = [
  ...document.querySelectorAll<HTMLElement>(".container__sections"),
];
const heading2 = document.querySelector<HTMLElement>(".container__heading2");
const text2 = document.querySelector<HTMLElement>(".container__text2");

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
    const target = e.target as HTMLElement;
    if (target.classList.contains("disabled")) {
      return;
    }

    changeScreen(e);
  });
});

function changeScreen(e: Event) {
  const target = e.target as HTMLElement;
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
  const pointerElem = value.childNodes[1] as HTMLElement;
  value.addEventListener("mousemove", function (e: MouseEvent) {
    pointerElem.style.top = e.clientY - 300 + "px";
    pointerElem.style.left = e.clientX - 700 + "px";
  });

  value.addEventListener("mouseout", function (e: MouseEvent) {
    pointerElem.style.top = "0px";
    pointerElem.style.left = "0px";
  });
});
