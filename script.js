const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});