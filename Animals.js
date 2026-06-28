let animals = 0;

const animalCounter = setInterval(() => {

animals += 5;

document.getElementById(
"animalCount"
).textContent = animals;

if(animals >= 500){

clearInterval(animalCounter);

}

},20);

let volunteers = 0;

const volunteerCounter = setInterval(() => {

volunteers++;

document.getElementById(
"volunteerCount"
).textContent = volunteers;

if(volunteers >= 120){

clearInterval(volunteerCounter);

}

},40);

let adoptions = 0;

const adoptionCounter = setInterval(() => {

adoptions++;

document.getElementById(
"adoptionCount"
).textContent = adoptions;

if(adoptions >= 85){

clearInterval(adoptionCounter);

}

},50);

function openVolunteerPopup(){

document.getElementById(
"volunteerPopup"
).style.display="flex";

}

function closeVolunteerPopup(){

document.getElementById(
"volunteerPopup"
).style.display="none";

}

function closePopup() {
    document.getElementById("volunteerPopup").style.display = "none";
}

function submitVolunteer(){

document.querySelector(
"#volunteerPopup .popup-content"
).innerHTML = `

<h2>🎉 Thank You!</h2>

<p>

Thank you for joining
our Animal Welfare Team 🐾

</p>

<p>

Together we can help
more animals find love
and safety ❤️

</p>

`;

}