function buttonMore() {
    const buttons = document.querySelectorAll(".button-more")
    buttons.forEach((button) => {
        button.classList.toggle("active")
    })
}
