// ==========================================
// Week 3 - Interactive Portfolio
// JavaScript File
// ==========================================

// Confirm that JavaScript is connected
console.log("JavaScript file loaded successfully!");


// ==========================================
// 1. CONTACT FORM VALIDATION
// ==========================================

// Get the contact form and input fields
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Get error and success message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");


// Validate the form when the user submits it
contactForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // Validate name
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";
        isValid = false;

    }


    // Validate email
    if (emailInput.value.trim() === "") {

        emailError.textContent = "Please enter your email.";
        isValid = false;

    } else if (!emailInput.value.includes("@")) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;

    }


    // Validate message
    if (messageInput.value.trim() === "") {

        messageError.textContent = "Please enter your message.";
        isValid = false;

    } else if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message must be at least 10 characters.";

        isValid = false;
    }


    // Show success message if form is valid
    if (isValid) {

        successMessage.textContent =
            "Message sent successfully!";

        // Clear the form after successful submission
        contactForm.reset();
    }
});


// ==========================================
// 2. SHOW / HIDE ABOUT CONTENT
// ==========================================

// Get About section elements
const aboutToggle = document.getElementById("aboutToggle");
const aboutContent = document.getElementById("aboutContent");


// Toggle About content when button is clicked
aboutToggle.addEventListener("click", function () {

    if (aboutContent.style.display === "none") {

        // Show About content
        aboutContent.style.display = "block";
        aboutToggle.textContent = "Hide About";

    } else {

        // Hide About content
        aboutContent.style.display = "none";
        aboutToggle.textContent = "Show About";
    }
});


// ==========================================
// 3. DARK / LIGHT MODE
// ==========================================

// Create a button for changing the theme
const themeButton = document.createElement("button");

themeButton.id = "themeToggle";
themeButton.textContent = "Dark Mode";


// Add the button to the page header
const header = document.querySelector("header");

if (header) {
    header.appendChild(themeButton);
}


// Check if a theme was saved earlier
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}


// Change between dark and light mode
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");


    // Save user's theme preference
    localStorage.setItem(
        "theme",
        darkModeEnabled ? "dark" : "light"
    );


    // Update button text
    if (darkModeEnabled) {

        themeButton.textContent = "Light Mode";

    } else {

        themeButton.textContent = "Dark Mode";
    }
});


// ==========================================
// 4. LIVE MESSAGE CHARACTER COUNTER
// ==========================================

// Create a character counter below the message box
const characterCount = document.createElement("small");

characterCount.id = "characterCount";
characterCount.textContent = "Characters: 0";


// Add character counter after the textarea
if (messageInput) {
    messageInput.insertAdjacentElement(
        "afterend",
        characterCount
    );
}


// Update character count while typing
messageInput.addEventListener("input", function () {

    const currentLength = messageInput.value.length;

    characterCount.textContent =
        "Characters: " + currentLength;
});


// ==========================================
// 5. NAVIGATION CLICK INTERACTION
// ==========================================

// Select all navigation links
const navigationLinks = document.querySelectorAll("nav a");


// Add click event to each navigation link
navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active class from all links
        navigationLinks.forEach(function (item) {
            item.classList.remove("active-link");
        });


        // Add active class to clicked link
        link.classList.add("active-link");
    });
});


// ==========================================
// END OF SCRIPT
// ==========================================

console.log("All interactive features are ready!");