let buttons = document.querySelectorAll(".all-buttons button");
let output = document.getElementById("output");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "AC") {
            output.value = "";
        } else if (value === "DEL") {
            output.value = output.value.slice(0, -1);
        } else if (value === "=") {
            try {
                output.value = eval(output.value);
            } catch {
                output.value = "Error";
            }
        } else {
            output.value += value;
        }
    });
});
