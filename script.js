let buttons = document.querySelectorAll(".button");
let inputField = document.getElementById('result'); // Changed from querySelector
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML.trim(); // Trim whitespace from inner HTML

    if (buttonText === "=") {
      string = eval(string);
      inputField.value = string;
    } else if (buttonText === 'reset') {
      string = '';
      inputField.value = string;
    } else if (button.classList.contains('del')) {
      string = string.slice(0, -1);
      inputField.value = string;
    } else {
      string = string + buttonText;
      inputField.value = string;
      console.log(string);
    }
  });
});
