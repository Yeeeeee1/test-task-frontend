import "../css/style.css";

const container = [...document.querySelectorAll(".container")];
const arrows = [...document.querySelectorAll(".arrow")];

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
    document.body.style.backgroundColor = "#8675BA";
  }

  if (e.target.id === "backward") {
    container[0].style.margin = "100px 0 0 100px";
    container[1].style.margin = "100px 0 0 100px";
    document.body.style.backgroundColor = "#8DBDBA";
  }
}
