let buttons = document.querySelectorAll(".button");
let inputField = document.getElementById("result");
let expression = "";
let result = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML.trim();

    const isOperator = ["+", "x", "/"].includes(buttonText);

    if (buttonText === "=") {
      result = eval(expression.replace(/x/g, "*"));
      inputField.value = result;
      expression = result.toString();
    } else if (inputField.value === "" && isOperator) {
      button.disabled = true;
    } else if (buttonText === "reset") {
      expression = "";
      inputField.value = expression;
      buttons.forEach((btn) => {
        btn.disabled = false;
      });
    } else if (button.classList.contains("del")) {
      expression = expression.slice(0, -1);
      inputField.value = expression;
    } else {
      expression = expression + buttonText;
      inputField.value = expression;
      enableOperatorButtons();
    }
  });
});

function enableOperatorButtons() {
  buttons.forEach((btn) => {
    if (
      ["+", "x", "/"].includes(btn.innerHTML.trim()) &&
      inputField.value !== ""
    ) {
      btn.disabled = false;
    }
  });
}
