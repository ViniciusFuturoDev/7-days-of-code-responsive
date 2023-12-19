function buttonMore() {
    const buttons = document.querySelectorAll(".button-more")
    buttons.forEach((button) => {
        console.log(button)
        button.classList.toggle("active")
    })
}
