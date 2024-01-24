
document.getElementById('vaccineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate vaccine details upload
    const ageRange = document.getElementById('ageRange').value;
    const vaccineName = document.getElementById('vaccineName').value;
    const vaccineDate = document.getElementById('vaccineDate').value;

    // Perform validation or send data to server as needed
    // For demonstration purposes, we'll just display an alert
    const confirmationMessage = `Vaccine details uploaded for age range: ${ageRange}\nVaccine Name: ${vaccineName}\nVaccine Date: ${vaccineDate}`;
    
    // Display a confirmation alert
    alert(confirmationMessage);

    // You can also consider displaying a more user-friendly notification using libraries like SweetAlert or custom modal dialogs.
});
