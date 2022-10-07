
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.backgroundColor = '#FFB800';
    });
    link.addEventListener("mouseout", function () {
        this.style.backgroundColor = 'transparent';
    });
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("btn").classList.toggle("fa-xmark");
    })
});

document.getElementById('toggle').addEventListener("click", () => {

    document.getElementById("nav").classList.toggle("active");
    document.getElementById("btn").classList.toggle("fa-xmark");
    
})
