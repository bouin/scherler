 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerColumn: 1,
    spaceBetween: 30,
    touchRatio: 0.2,
    threshold: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
 function scrollFunction() {
     if (window.scrollY > 700) {
         document.getElementById("nav-nav-ok").classList.add('just-do-it');
     } else {
         document.getElementById("nav-nav-ok").classList.remove('just-do-it');
     }
 }
 window.onscroll = function() {
     scrollFunction()
 };

 document.addEventListener('DOMContentLoaded', function () {


     /*toggling the menu visibility based on the scroll position*/
        /*var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-nav-ok").style.top = "0";
          } else {
            document.getElementById("nav-nav-ok").style.top = "-100px";
          }
          prevScrollpos = currentScrollPos;
        }*/

        var prevScrollpos = window.pageYOffset;

        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;

            // Only run the scroll behavior after scrolling down 600px
            if (currentScrollPos >= 300) {
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("nav-nav-ok").style.top = "0";
                } else {
                    document.getElementById("nav-nav-ok").style.top = "-100px";
                }
            } else {
                // Ensure the navigation bar is visible when less than 600px is scrolled
                document.getElementById("nav-nav-ok").style.top = "0";
            }

            prevScrollpos = currentScrollPos;
        }

     /*// Hide the menu initially */
     //nav.classList.add("hidden");
     const navus = document.getElementById("nav-nav-ok");
     window.addEventListener("scroll", () => {
         if (window.scrollY > 400) {
             navus.classList.add("color");
         } else {
             navus.classList.remove("color");
         }
     });

     /*Select*/
     const formGroup = document.querySelector('.form-group');
         const selectBox = formGroup.querySelector('.select-box');
         const options = formGroup.querySelector('.options');
         const checkboxes = formGroup.querySelectorAll('.checkbox input');

         selectBox.addEventListener('click', () => {
             formGroup.classList.toggle('open');
         });

         options.addEventListener('click', (event) => {
             if (event.target.tagName === 'LABEL') {
                 const checkbox = event.target.querySelector('input[type="checkbox"]');
                 checkbox.checked = !checkbox.checked;
                 selectBox.textContent = Array.from(checkboxes)
                     .filter(checkbox => checkbox.checked)
                     .map(checkbox => checkbox.nextElementSibling.textContent)
                     .join(', ') || 'Select options';
             }
         });

         document.addEventListener('click', (event) => {
             if (!formGroup.contains(event.target)) {
                 formGroup.classList.remove('open');
             }
         });


     /*window.addEventListener("scroll", () => {
          if (window.scrollY > 600) {
              nav.classList.add("show");
          } else {
              nav.classList.remove("show");
          }
      });*/

     // Handle click on elements with the class "i-want-to-click"
     document.querySelectorAll('.i-want-to-click').forEach(function (element) {
         element.addEventListener('click', function () {
             const openCollapse = document.querySelector('.navbar .collapse.show');
             if (openCollapse) {
                 // Bootstrap 5 Collapse API (assuming Bootstrap 5+ is used)
                 const collapseInstance = bootstrap.Collapse.getInstance(openCollapse);
                 if (collapseInstance) {
                     collapseInstance.hide();
                 }
             }
         });
     });

     // Add or remove 'modal-open' class on body based on collapse state
     const navbar = document.getElementById('navbarSupportedContent');
     if (navbar) {
         navbar.addEventListener('show.bs.collapse', function () {
             document.body.classList.add('modal-open');
         });

         navbar.addEventListener('hide.bs.collapse', function () {
             document.body.classList.remove('modal-open');
         });
     }
 });




 document.addEventListener('DOMContentLoaded', function () {
     // Function to handle the modal open/closed state based on screen width
     function handleWindowResize() {
         const width = window.innerWidth;

         if (width < 992) {
             if (!document.body.classList.contains('modal-open')) {
                 document.body.classList.add('closed');
             }
             setTimeout(() => {
                 if (!document.body.classList.contains('modal-open')) {
                     document.body.classList.remove('closed');
                 }
             }, 100);
         } else {
             document.body.classList.remove('closed');
         }
     }

     // Initial check on page load
     handleWindowResize();

     // Add event listener for window resize
     window.addEventListener('resize', handleWindowResize);

     // Handle click on nav links
     document.querySelectorAll('a.nav-link').forEach(function (link) {
         link.addEventListener('click', function () {
             if (document.body.classList.contains('modal-open')) {
                 document.body.classList.remove('modal-open');
             }
         });
     });
 });

 // Get the element with the data-cat attribute
 const catElement = document.querySelector('[data-cat]');

 // Check if the element exists and has a valid data-cat attribute
 if (catElement) {
     const categoryId = catElement.getAttribute('data-cat');

     // Define a color map for each category ID
     const colorMap = {
         '5': '#F2F3F6',
         '6': '#F8F7F1',
         '7': '#ECF5FA',
         '8': '#D7E4F6',
         '9': '#D0D8E5',
         '10': '#F2F3F6'
     };

     // Set the background color of the body based on the category ID
     if (colorMap[categoryId]) {
         document.body.style.backgroundColor = colorMap[categoryId];
         document.body.classList.add(`background-color-changed-${categoryId}`);  // Add the class 'color-changed' to the body
         document.documentElement.style.backgroundColor = colorMap[categoryId];
         console.log('done');
     }
 }
// Check if an element with ID 'noimagesub' exists
if (document.getElementById('noimagesub')) {
    // Add 100px to the padding of the body
    document.body.classList.add('padding-top-body-sub');
    console.log('Padding added to body');
} else {
    console.log('Element with ID "noimagesub" not found');
}



/*Ajax call for NEWS*/
    const form = document.getElementById('blogme'); // Select the form
    if (!form) {
        console.error('Form not found!');
        // Exit if form is not found
    }

    // Select all checkboxes
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    // Add event listener for each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Prepare form data for submission
            const formData = new FormData(form);

            // Send AJAX request
            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Assuming the response is HTML
            })
            .then((html) => {
                // Create a temporary DOM element to parse the response
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Extract the desired content (in this case, the news container)
                const newContent = tempDiv.querySelector('#container-to-take');

                if (newContent) {
                    // Replace the old content with the new content
                    const oldContent = document.querySelector('#container-to-take');
                    if (oldContent) {
                        oldContent.innerHTML = newContent.innerHTML;
                    }
                } else {
                    console.error('Target container not found in response.');
                }
            })
            .catch((error) => {
                console.error('Error during AJAX request:', error);
            });
        });
    });

