document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".section");
    let currentSection = -1;

    function scrollToSection(index) {
        // window.scrollTo(0, sections[index].offsetTop - 100);
        sections[index].scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    });
});