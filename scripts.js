// Scroll to top button functionality
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add smooth scrolling for navbar links
$(document).ready(function() {
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });

            // Add animation to clicked navbar link
            $(".nav-link").removeClass('active animate__animated animate__bounce');
            $(this).addClass('active animate__animated animate__bounce');
        }
    });

    // Scroll animation for sections on load
    $('.hero, .about, .skills, .experience, .contact').each(function(){
        $(this).waypoint(function(direction) {
            if(direction === 'down') {
                $(this.element).addClass('animate__animated animate__fadeIn');
            }
        }, {
            offset: '75%'
        });
    });
});
