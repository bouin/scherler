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
         '8': '#D9E7F4'
     };

     // Set the background color of the body based on the category ID
     if (colorMap[categoryId]) {
         document.body.style.backgroundColor = colorMap[categoryId];
     }
 }
