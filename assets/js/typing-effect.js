document.addEventListener("DOMContentLoaded", function () {
    let speed = 50;  // typing speed in milliseconds
    let currentInterval;  // to keep track of the current interval

    function finishTyping(element) {
        clearInterval(currentInterval);  // clear the current typing animation
        element.innerHTML = element.dataset.text;  // fill the rest of the content instantly
    }

    function typeOut(element, callback) {
        element.dataset.text = element.innerHTML;  // store the full text in a data attribute
        element.innerHTML = "";
        element.style.visibility = "visible";

        let i = 0;
        currentInterval = setInterval(function () {
            if (i < element.dataset.text.length) {
                element.innerHTML += element.dataset.text.charAt(i);
                i++;
            } else {
                clearInterval(currentInterval);
                if (callback) callback();  // Call the next typing function
            }
        }, speed);
    }

    let titles = document.querySelectorAll(".header-title span");
    typeOut(titles[0], function () {
        typeOut(titles[1], function () {
            let subtitles = document.querySelectorAll(".header-subtitle");
            typeOut(subtitles[0], function () {
                typeOut(subtitles[1], function () {
                    let btn = document.querySelector(".btn.btn-primary");
                    document.getElementById("visit-works-btn").style.display = "block";
                    document.getElementById("arrow").style.display = "block";
                });
            });
        });
    });

    window.addEventListener("scroll", function() {
        let allElements = [...titles, ...document.querySelectorAll(".header-subtitle")];
        allElements.forEach(el => finishTyping(el));
    });
});

function redirectToPortfolio() {
    window.location.href = "./index.html#portfolio";
}

function redirectToResume() {
    window.location.href = "./assets/files/CV.pdf";
}
