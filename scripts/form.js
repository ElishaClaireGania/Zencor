document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form values
      const firstName = document.getElementById("firstName")?.value || "";
      const lastName = document.getElementById("lastName")?.value || "";

      // Display success feedback
      alert(
        `Thank you ${firstName} ${lastName}! Your message has been received. We'll respond within 24 hours.`,
      );

      // Reset form fields
      this.reset();
    });
  }

  // --- 2. PHONE NUMBER VALIDATION ---
  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      // RegEx: Remove any character that is not a digit or a plus sign
      this.value = this.value.replace(/[^\d+]/g, "");
    });
  }
});
