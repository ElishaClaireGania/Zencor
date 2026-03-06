document.addEventListener("DOMContentLoaded", () => {
  const PUBLIC_KEY = "pkO0nyFYDqlwXWsJ_";
  const SERVICE_ID = "service_5k5k75w";
  const TEMPLATE_ID = "template_pnply8c";
  emailjs.init(PUBLIC_KEY);
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      const statusDiv = document.getElementById("formStatus");
      const formData = {
        firstName: document.getElementById("firstName")?.value || "",
        lastName: document.getElementById("lastName")?.value || "",
        email: document.getElementById("email")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        message: document.getElementById("message")?.value || "",
      };
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.message
      ) {
        if (statusDiv) {
          statusDiv.textContent = "Please fill in all required fields.";
          statusDiv.style.color = "red";
        }
        return;
      }
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = !0;
      if (statusDiv) {
        statusDiv.textContent = "Sending message...";
        statusDiv.style.color = "#666";
      }
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            `Thank you ${formData.firstName}! Your message has been sent to Zencor. We'll respond within 24 hours.`,
          );
          if (statusDiv) {
            statusDiv.textContent = "✓ Message sent successfully!";
            statusDiv.style.color = "green";
          }
          contactForm.reset();
        })
        .catch(function (error) {
          console.log("FAILED...", error);
          alert(
            "Sorry, there was an error. Please email us directly at zencor2015@gmail.com",
          );
          if (statusDiv) {
            statusDiv.textContent =
              "✗ Failed to send. Please try again or email us directly.";
            statusDiv.style.color = "red";
          }
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = !1;
        });
    });
  }
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d+\s]/g, "");
    });
  }
});
