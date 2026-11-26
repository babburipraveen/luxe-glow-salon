
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu after selecting a link
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Booking form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("bookingDate").value;

  if (!/^[0-9+\s-]{10,15}$/.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  // Replace this with the salon's WhatsApp number.
  const salonNumber = "6303821749";

  const message =
    `Hello Luxe & Glow! I want to book an appointment.%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Preferred date: ${encodeURIComponent(date)}`;

  const whatsappURL =
    `https://wa.me/${salonNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});
