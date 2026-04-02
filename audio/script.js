document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro");
    const toggleBtn = document.getElementById("theme-toggle");
    const mainNah = document.getElementById("main-nah");

    const leftSword = document.getElementById("left-sword");
    const rightSword = document.getElementById("right-sword");

    mainNah.style.opacity = 1;

    function updateSwords() {
        if (document.body.classList.contains("light-mode")) {
            leftSword.src = "image/light_sword.png";
            rightSword.src = "image/light_sword2.png";
        } else {
            leftSword.src = "image/sword_transparent.png";
            rightSword.src = "image/sword_transparent(2).png";
        }
    }

    function updateThemeIcon() {
        if (document.body.classList.contains("light-mode")) {
            toggleBtn.textContent = "Light Mode☀️";
        } else {
            toggleBtn.textContent = "Dark Mode🌙";
        }
    }

    updateSwords();
    updateThemeIcon();

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        updateSwords();
        updateThemeIcon();
    });

    let mybutton = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        mybutton.style.display =
            (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            ? "block"
            : "none";
    };

    window.topFunction = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        history.pushState("", document.title, window.location.pathname);
    };

    const introDuration = 4500;
    const fadeInTime = 2000;

    setTimeout(() => {
        mainNah.style.transition = `opacity ${fadeInTime}ms ease-in-out`;
        mainNah.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        intro.style.display = "none";
        toggleBtn.classList.add("show");
    }, introDuration);
});