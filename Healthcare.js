window.open(
    "https://www.who.int/",
    "_blank"
);

function submitEmergency() {

    document.querySelector("#emergencyPopup .popup-content").innerHTML = `

        <span class="close"
              onclick="closeEmergencyPopup()">
              &times;
        </span>

        <h2>🚑 Request Received</h2>

        <p>
            Thank you for reaching out.
        </p>

        <p>
            Our healthcare volunteers
            will contact you shortly.
        </p>

    `;

}