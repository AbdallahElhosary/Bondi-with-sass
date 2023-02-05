let workSectionUls = document.querySelectorAll(".work-section ul li");

workSectionUls.forEach(e => {
    e.onclick = function () {
        workSectionUls.forEach(ul => {
            ul.classList.remove("active");
            ul.classList.remove("rounded-pill");
        })
        e.classList.add("active");
        e.classList.add("rounded-pill");

    }
})

console.log(workSectionUls)