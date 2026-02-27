// check.js
function checkVaccineEligibility(age) {
    if (age >= 65) {
        return "You are eligible for the priority senior flu shot.";
    } else {
        return "Standard flu shots are available for your age group.";
    }
}

console.log(checkVaccineEligibility(70)); // Example test
