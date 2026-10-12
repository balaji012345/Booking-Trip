// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Booking Form

const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

const checkin = document.getElementById("checkin");

// Prevent past check-in dates
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

checkin.min = `${year}-${month}-${day}`;

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const hotelType = document.getElementById("hotelType").value;
    const location = document.getElementById("location").value.trim();
    const date = document.getElementById("checkin").value;
    const rooms = document.getElementById("rooms").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;

    message.textContent =
        `Searching ${hotelType} in ${location} for ${date}. ` +
        `${rooms}, ${adults} adult(s), ${children} child(ren).`;

});


// Hotel Book Now Buttons

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const location = button.dataset.location;

        document.getElementById("location").value = location;

        document.querySelector(".booking").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Hotel Carousel Buttons

const hotelContainer = document.getElementById("hotelContainer");

document.getElementById("nextBtn").addEventListener("click", function () {

    hotelContainer.scrollBy({
        left: 250,
        behavior: "smooth"
    });

});

document.getElementById("prevBtn").addEventListener("click", function () {

    hotelContainer.scrollBy({
        left: -250,
        behavior: "smooth"
    });

});


// Subscribe Form

const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("subscribeMessage").textContent =
        `Thank you! Subscription request received for ${email}.`;

    subscribeForm.reset();

});