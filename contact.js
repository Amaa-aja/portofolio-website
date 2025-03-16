document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        
        // Show loading state
        responseMessage.textContent = "Sending...";
        responseMessage.style.color = "#007BFF";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            
            if (result.success) {
                responseMessage.textContent = "Message sent successfully!";
                responseMessage.style.color = "green";
                form.reset(); // Reset form fields
            } else {
                responseMessage.textContent = "Error sending message. Please try again.";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.textContent = "Network error. Please try again later.";
            responseMessage.style.color = "red";
        }
    });
});
