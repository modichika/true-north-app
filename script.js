// Get references to all our "screens" and elements
const inputScreen = document.getElementById('input-screen');
const loadingScreen = document.getElementById('loading-screen');
const outputScreen = document.getElementById('output-screen');
const connectButton = document.getElementById('connectButton');
const userStoryInput = document.getElementById('userStory');
const userFocusInput = document.getElementById('userFocus');
const userAmbitionInput = document.getElementById('userAmbition');
const resultsContainer = document.getElementById('resultsContainer');

// Set the initial state of the page
loadingScreen.style.display = 'none';
outputScreen.style.display = 'none';
inputScreen.style.display = 'block';

connectButton.addEventListener('click', async () => {
    // Get data from all three inputs
    const story = userStoryInput.value;
    const focus = userFocusInput.value;
    const ambition = userAmbitionInput.value;

    if (story.trim() === '' || focus.trim() === '' || ambition.trim() === '') {
        alert('Please fill out all three fields!');
        return;
    }

    // Hide the input screen and show the loading screen
    inputScreen.style.display = 'none';
    loadingScreen.style.display = 'flex';

    const backendUrl = "https://us-central1-true-north-hackathon.cloudfunctions.net/true-north-backend"; 

    try {
        // Package all three pieces of data to send
        const userProfile = {
            story: story,
            focus: focus,
            ambition: ambition
        };

        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userProfile) // Send the full profile
        });

        if (!response.ok) {
            throw new Error(`Server error! status: ${response.status}`);
        }

        const result = await response.json();

        // Hide loading, show output, and display the result
        loadingScreen.style.display = 'none';
        outputScreen.style.display = 'block';
        resultsContainer.innerHTML = marked.parse(result.aiResponse);

    } catch (error) {
        // Handle errors
        loadingScreen.style.display = 'none';
        outputScreen.style.display = 'block';
        resultsContainer.innerHTML = `<p style="color: red;">An error occurred. Please try again later.</p>`;
        console.error('Error:', error);
    }
});