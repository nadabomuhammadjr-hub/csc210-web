document.addEventListener("DOMContentLoaded", function () {

    const contactsForm =
        document.getElementById("contactsForm");

    const contactsSuccess =
        document.getElementById("contactsSuccess");

    if (contactsForm) {

        contactsForm.addEventListener("submit", function (event) {

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

            contactsForm.style.display = "none";
            contactsSuccess.style.display = "block";

        });
    }

});
