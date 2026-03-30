document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro");
    const toggleBtn = document.getElementById("theme-toggle");

    const leftSword = document.getElementById("left-sword");
    const rightSword = document.getElementById("right-sword");

    setTimeout(() => {
        intro.style.display = "none";
        toggleBtn.classList.add("show");
    }, 4500);

    function updateSwords() {
        if (document.body.classList.contains("light-mode")) {
            leftSword.src = "image/light_sword.png";
            rightSword.src = "image/light_sword2.png";
        } else {
            leftSword.src = "image/sword_transparent.png";
            rightSword.src = "image/sword_transparent(2).png";
        }
    }
    updateSwords();

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        updateSwords();
    });

    let mybutton = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    };

    window.topFunction = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});