// Simulating data fetching from the server
function fetchData() {
    // Replace this with actual data fetching logic or API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                lastExecution: '2024-01-25 08:00:00',
                nextExecution: '2024-01-26 08:00:00',
                // Add more cron job information as needed
            });
        }, 1000);
    });
}

// Update cron job information on the page
async function updateCronInfo() {
    const cronInfoDiv = document.getElementById('cronInfo');

    try {
        const data = await fetchData();

        // Update HTML with fetched data
        document.getElementById('lastExecution').textContent = `Last Execution: ${data.lastExecution}`;
        document.getElementById('nextExecution').textContent = `Next Execution: ${data.nextExecution}`;
        // Add more updates as needed

    } catch (error) {
        console.error('Error fetching cron job information:', error);
        cronInfoDiv.innerHTML = '<p>Unable to fetch cron job information.</p>';
    }
}

// Call the updateCronInfo function on page load
window.onload = updateCronInfo;
