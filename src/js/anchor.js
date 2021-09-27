import $ from 'jquery'

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("[data-scroll]").on('click', function(event) {

        if (this.hash !== '') {

            // Store hash
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
            return false;
        } // End if
    });
});
