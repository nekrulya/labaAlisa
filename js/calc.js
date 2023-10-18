const expr = document.querySelector(".calc__expr");
const btns = document.querySelectorAll(".calc__btn");

for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("calc__btn__delete") ||
      e.target.classList.contains("calc__btn__zero")
    ) {
      expr.textContent = "0";
    } else if (e.target.classList.contains("calc__btn__backspace")) {
      expr.textContent = expr.textContent.slice(0, expr.textContent.length - 1);
    } else if (e.target.classList.contains("calc__btn__equal")) {
      expr.textContent = eval(expr.textContent);
    } else {
      if (expr.textContent === "0") {
        expr.textContent = e.target.textContent;
      } else {
        expr.textContent += e.target.textContent;
      }
    }
  });
}
