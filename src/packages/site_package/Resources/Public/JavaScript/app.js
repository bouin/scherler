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
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
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


// Check if the page is already scrolled down on load
window.onload = function() {
    if (window.pageYOffset >= 300) {
        document.getElementById("nav-nav-ok").style.top = "-100px"; // Example: hide the navbar
    } else {
        document.getElementById("nav-nav-ok").style.top = "0"; // Example: show the navbar
    }
};
     /*toggling the menu visibility based on the scroll position*/

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
         if (window.scrollY > 50) {
             navus.classList.add("color");
         } else {
             navus.classList.remove("color");
         }
     });

     /*Select*/

     const formGroup = document.querySelector('.form-group');
     if (formGroup) {
         const selectBox = formGroup.querySelector('.select-box');
         const options = formGroup.querySelector('.options');
         const checkboxesClicked = formGroup.querySelectorAll('.option input[type="checkbox"]');
         const checkboxes = formGroup.querySelectorAll('.option input[type="checkbox"]');
         const titleSpan = formGroup.querySelector('.thisistitle'); // Define the titleSpan element

         if (selectBox) {
             selectBox.addEventListener('click', () => {
                 formGroup.classList.toggle('open');
             });
         } else {
             //*console.warn('Select box not found.');*//*
         }
        // Add event listener for each checkbox
          checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
              // Check if any checkbox is checked
              const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

              // Log or handle the result
              if (anyChecked) {
                titleSpan.classList.add('has-selection');
              } else {
                titleSpan.classList.remove('has-selection');
              }
            });
          });
         /*if (options && checkboxes.length > 0) {
             options.addEventListener('click', (event) => {
                 if (event.target.tagName === 'LABEL') {
                     const checkbox = event.target.closest('label');
                     // Add or remove the `has-selection` class to titleSpan if any checkbox is checked

                     *//*if (checkbox) {
                         checkbox.checked = !checkbox.checked;
                         if (selectBox) {
                             titleSpan.classList.add('has-selection');
                         } else {
                            titleSpan.classList.remove('has-selection');
                         }
                     }*//*
                 }
             });
         }*/

         document.addEventListener('click', (event) => {
             if (!formGroup.contains(event.target)) {
                 formGroup.classList.remove('open');
             }
         });
     } else {
         //*console.warn('Form group not found.');*/
     }


     /* Select */
     /* Select */
     /*const formGroup = document.querySelector('.form-group');
     if (formGroup) {
         const selectBox = formGroup.querySelector('.select-box');
         const options = formGroup.querySelector('.options');
         const checkboxes = formGroup.querySelectorAll('.option input[type="checkbox"]');
         const titleSpan = formGroup.querySelector('.thisistitle span'); // Target the span inside .thisistitle

         if (selectBox) {
             selectBox.addEventListener('click', () => {
                 formGroup.classList.toggle('open');
             });
         } else {
             console.warn('Select box not found.');
         }

         if (options && checkboxes.length > 0) {
             // Update the UI whenever a checkbox is clicked
             options.addEventListener('click', (event) => {
                 const checkbox = event.target.closest('input[type="checkbox"]');
                 if (checkbox) {
                     checkbox.checked = !checkbox.checked;

                     // Update the select box text
                     if (selectBox) {
                         const selectedText = Array.from(checkboxes)
                             .filter((checkbox) => checkbox.checked)
                             .map((checkbox) => checkbox.nextElementSibling?.textContent.trim() || '')
                             .join(', ') || 'Select options';
                         selectBox.querySelector('.thisistitle').textContent = selectedText;
                     }

                     // Add or remove the `has-selection` class
                     const anyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
                     if (titleSpan) {
                         if (anyChecked) {
                             titleSpan.classList.add('has-selection');
                         } else {
                             titleSpan.classList.remove('has-selection');
                         }
                     }
                 }
             });
         } else {
             console.warn('Options or checkboxes not found.');
         }

         // Close dropdown when clicking outside
         document.addEventListener('click', (event) => {
             if (!formGroup.contains(event.target)) {
                 formGroup.classList.remove('open');
             }
         });
     } else {
         console.warn('Form group not found.');
     }*/




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
         /*console.log('done');*/
     }
 }
// Check if an element with ID 'noimagesub' exists
if (document.getElementById('noimagesub')) {
    // Add 100px to the padding of the body
    document.body.classList.add('padding-top-body-sub');
    /*console.log('Padding added to body');*/
} else {
    /*console.log('Element with ID "noimagesub" not found');*/
}



    /*Ajax call for NEWS*/
    const form = document.getElementById('blogme'); // Select the form
    if (form) {

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
    }


/*
Code for fetching Jobs*/

const apiUrl = 'https://www.yousty.ch/de-CH/lehrstellen.json?widget=ac996a68-bb61-4c20-b363-fc70f997a701';

async function fetchJobs() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayJobs(data.results); // Directly access results
        /*console.log(data.results); // Directly access results*/
    } catch (error) {
        console.error('Error fetching job data:', error);
    }
}

function displayJobs(jobs) {
    const jobListings = document.getElementById('job-listings');
    if (!jobListings) {
         /*   console.error('Element with id "job-listings" not found!');*/
            return; // Exit if jobListings element doesn't exist
        }
    if (!Array.isArray(jobs) || jobs.length === 0) {
        jobListings.innerHTML = '<p>No job listings found.</p>';
        return;
    }

    jobs.forEach(job => {
        const jobBox = document.createElement('div');
        // Add pt-50 class to all elements except the first one
        jobBox.className = 'col-12 col-md-12 col-xl-10 mb-50 d-flex flex-column justify-content-between line-bottom align-items-end job-box'; // Keep the parent flex container

        // Create first-line div for minibeschr and joblink
        const firstLineDiv = document.createElement('div');
        firstLineDiv.className = 'first-line d-flex';

        // Minibeschr
        const minibeschr = document.createElement('div');
        minibeschr.className = 'minibeschr pb-10';
        const minibeschrText = document.createElement('div');
        minibeschrText.className = 'pb-1';
        minibeschrText.innerText = 'Lehrstelle'; // Static text for "Lehrstelle"
        minibeschr.appendChild(minibeschrText);

        // Job Link (Anchor link)
        const jobLinkDiv = document.createElement('div');
        jobLinkDiv.className = 'joblink txt-black pb-10';

        const jobLink = document.createElement('a');
        jobLink.href = job.profile_link || '#'; // Use job.profile_link or fallback to '#'
        jobLink.className = 'nolink no-link d-flex flex-row align-items-center';
        jobLink.target = '_blank'; // This sets the target attribute to "_blank"


        // Job Name
        const jobNameDiv = document.createElement('div');
        jobNameDiv.className = 'like-h3 pe-3';
        jobNameDiv.innerText = job.job_name || 'Kein Stellennamen verfügbar';

        // Arrow SVG
        const arrowDiv = document.createElement('div');
        arrowDiv.className = 'arrowman pb-1';
        const arrowImage = document.createElement('img');
        arrowImage.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='34.408' height='13.667' viewBox='0 0 34.408 13.667'><path d='M27.586,0l-.858.858L32.1,6.235H0V7.41H32.1l-5.354,5.4.858.858,6.8-6.8V6.8h-.023Z' transform='translate(0 0)'/></svg>";
        arrowImage.alt = "Arrow SVG";
        arrowDiv.appendChild(arrowImage);

        // Append job name and arrow to job link
        jobLink.appendChild(jobNameDiv);
        jobLink.appendChild(arrowDiv);

        // Append the jobLink to the jobLinkDiv
        jobLinkDiv.appendChild(jobLink);

        // Append minibeschr and joblink divs to firstLineDiv
        firstLineDiv.appendChild(minibeschr);
        firstLineDiv.appendChild(jobLinkDiv);

        // Create 'rest-of-data' div to hold year and trial apprenticeship information
        const restOfDataDiv = document.createElement('div');
        restOfDataDiv.className = 'rest-of-data';

        // Year 1
        const year1Div = document.createElement('div');
        year1Div.className = 'class1';
        if (job.year_1 && job.year_1[0]) {
            year1Div.innerHTML = `<span class="${job.year_1[1] ? 'true' : 'false'}"></span> ${job.year_1[0]}`;
        }

        // Year 2
        const year2Div = document.createElement('div');
        year2Div.className = 'class1';
        if (job.year_2 && job.year_2[0]) {
            year2Div.innerHTML = `<span class="${job.year_2[1] ? 'true' : 'false'}"></span> ${job.year_2[0]}`;
        }

        // Trial Apprenticeship
        const trialApprenticeshipDiv = document.createElement('div');
        trialApprenticeshipDiv.className = 'class1';
        const isTrialFalse = job.trial_apprenticeship === false; // Check if the value is false
        trialApprenticeshipDiv.innerHTML = `<span class="${isTrialFalse ? 'false' : 'true'}"></span> Schnupperlehre`;

        // Append all year and trial apprenticeship data to 'rest-of-data' div
        restOfDataDiv.appendChild(year1Div);
        restOfDataDiv.appendChild(year2Div);
        restOfDataDiv.appendChild(trialApprenticeshipDiv);

        // Append the 'first-line' and 'rest-of-data' divs to the jobBox container
        jobBox.appendChild(firstLineDiv);
        jobBox.appendChild(restOfDataDiv);

        // Append the jobBox to the jobListings container
        jobListings.appendChild(jobBox);
    });
}

fetchJobs();
