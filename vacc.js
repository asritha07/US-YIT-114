document.getElementById('vaccineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const ageRange = document.getElementById('ageRange').value;
    const vaccineName = document.getElementById('vaccineName').value;
    const vaccineDate = document.getElementById('vaccineDate').value;

    const confirmationMessage = `Vaccine details uploaded for age range: ${ageRange}\nVaccine Name: ${vaccineName}\nVaccine Date: ${vaccineDate}`;
    alert(confirmationMessage);
});
