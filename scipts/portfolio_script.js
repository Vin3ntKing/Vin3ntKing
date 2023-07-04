window.addEventListener('scroll', function() {
    var portfolioNav = document.getElementById('portfolio-nav');
    var sections = document.querySelectorAll('section');
  
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var scrollPosition = window.pageYOffset;
    
        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            var sectionId = section.getAttribute('id');
            var navLink = portfolioNav.querySelector('a[href="#' + sectionId + '"]');
            navLink.classList.add('active');
        } else {
            var navLinks = portfolioNav.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
        }
    });
});
