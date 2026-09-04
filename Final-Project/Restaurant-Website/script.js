/* =========================================================
   SPICE GARDEN - JAVASCRIPT
   Final Task | Restaurant Website
   ========================================================= */


/* =========================================================
   1. BOOKING FORM VALIDATION
   ========================================================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        // Stop the form from refreshing the page
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const guests = document.getElementById("guests").value;

        // Get error/success elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const successMessage =
            document.getElementById("successMessage");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;


        /* -------------------------------------------------
           Name validation
           ------------------------------------------------- */

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;
        }


        /* -------------------------------------------------
           Email validation
           ------------------------------------------------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;
        }


        /* -------------------------------------------------
           Date validation
           ------------------------------------------------- */

        if (date === "") {

            alert("Please select a booking date.");

            isValid = false;
        }


        /* -------------------------------------------------
           Guests validation
           ------------------------------------------------- */

        if (guests === "") {

            alert("Please select the number of guests.");

            isValid = false;
        }


        /* -------------------------------------------------
           Successful submission
           ------------------------------------------------- */

        if (isValid) {

            successMessage.textContent =
                "✓ Your table has been reserved successfully!";

            // Save booking information temporarily
            const bookingData = {
                name: name,
                email: email,
                date: date,
                guests: guests
            };

            localStorage.setItem(
                "spiceGardenBooking",
                JSON.stringify(bookingData)
            );

            // Clear form
            bookingForm.reset();
        }

    });

}


/* =========================================================
   2. SET MINIMUM BOOKING DATE
   Users cannot select a date from the past.
   ========================================================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    const todayFormatted =
        `${year}-${month}-${day}`;

    dateInput.min = todayFormatted;
}


/* =========================================================
   3. MENU CARD INTERACTION
   Clicking a menu card highlights it.
   ========================================================= */

const menuCards =
    document.querySelectorAll(".menu-card");

menuCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Remove selection from other cards
        menuCards.forEach(function (otherCard) {

            if (otherCard !== card) {
                otherCard.classList.remove("selected");
            }

        });

        // Toggle selected card
        card.classList.toggle("selected");

    });

});


/* =========================================================
   4. ACTIVE NAVIGATION
   Highlights the current page in the navbar.
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    link.classList.remove("active");

    if (
        linkPage === currentPage ||
        (currentPage === "" &&
            linkPage === "index.html")
    ) {

        link.classList.add("active");
    }

});


/* =========================================================
   5. SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================================================
   6. PAGE LOAD MESSAGE
   Useful for debugging and testing.
   ========================================================= */

window.addEventListener("load", function () {

    console.log(
        "✓ Spice Garden website loaded successfully!"
    );

});
