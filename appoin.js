function submitAppointment() {
    // Get form inputs
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Display the resulting output
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Appointment scheduled with ${doctor} on ${date} at ${time}.`;
}

