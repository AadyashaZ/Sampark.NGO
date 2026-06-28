// TREE COUNTER//
let trees = 0;
const treeCounter = setInterval(() => {
    trees += 10;
    document.getElementById("treeCount").textContent =
        trees;

    if (trees >= 2500) {
        clearInterval(treeCounter);
    }
}, 10);

// VOLUNTEERS//
let volunteers = 0;
const volunteerCounter = setInterval(() => {
    volunteers += 2;
    document.getElementById("volunteerCount").textContent =
        volunteers;

    if (volunteers >= 500) {
        clearInterval(volunteerCounter);
    }
}, 20);

// DRIVES//
let drives = 0;
const driveCounter = setInterval(() => {
    drives++;
    document.getElementById("driveCount").textContent =
        drives;

    if (drives >= 75) {
        clearInterval(driveCounter);
    }
}, 50);

// POPUP//
function openVolunteerPopup() {
    document.getElementById("volunteerPopup")
        .style.display = "flex";
}

function closeVolunteerPopup() {
    document.getElementById("volunteerPopup")
        .style.display = "none";
}

function joinGreenTeam() {
    const name =
        document.getElementById("volunteerName").value;
    const phone =
        document.getElementById("volunteerPhone").value;
    if (!name || !phone) {
        alert("Please fill all fields 😊");
        return;
    }
    window.open(
        "https://chat.whatsapp.com/INNDAycMQcN6G53BeuFwp3",
        "_blank"
    );
}

function joinGreenTeam() {

    const name = document.getElementById("volunteerName").value;
    const phone = document.getElementById("volunteerPhone").value;

    if (!name || !phone) {
        alert("Please fill all fields 😊");
        return;
    }

    window.open(
        "https://earth.org/",
        "_blank"
    );

}