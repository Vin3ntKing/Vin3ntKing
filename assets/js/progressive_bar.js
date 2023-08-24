$(document).ready(function() {
    // A flag to ensure the animation only happens once
    var animated = false;

    $(window).scroll(function() {
        if (!animated && isElementInView($('.my-skills-container'))) {
            $('.my-skills-container .progress-bar').each(function() {
                var percentage = $(this).attr("aria-valuenow") + "%";
                $(this).css({
                    "width": percentage,
                    "background-color": getRandomColor() // Setting a random color
                });
            });
            animated = true;  // Set flag to true so the animation won't happen again
        }
    });
});

// Check if an element is in the viewport
function isElementInView(element) {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    return (elementTop < scrollPos + windowHeight) && (elementBottom > scrollPos);
}

// Function to generate random RGB color
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
