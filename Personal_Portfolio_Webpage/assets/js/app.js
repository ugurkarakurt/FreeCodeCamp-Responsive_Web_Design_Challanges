const listItems = document.querySelectorAll(".nav-link");
const navbarTitle = document.getElementById("navbar-title");

listItems.forEach(item => {
    item.addEventListener("click", function () {
        listItems.forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    })
});

navbarTitle.addEventListener("click", function () {
    listItems.forEach(item => {
        item.classList.remove("active");
    });
    listItems[0].classList.add("active");
})