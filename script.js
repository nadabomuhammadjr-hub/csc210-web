document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    const contactSuccess =
        document.getElementById("contactSuccess");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                message === ""
            ) {
                alert("Please fill in all the fields.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            contactForm.style.display = "none";
            contactSuccess.style.display = "block";

        });
    }

});
