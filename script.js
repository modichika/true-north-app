// Step 1: Get references to the HTML elements so our script can interact with them.
const connectButton = document.getElementById('connectButton');
const userStoryInput = document.getElementById('userStory');
const resultsContainer = document.getElementById('resultsContainer');

// Step 2: Add an "event listener" that waits for the user to click the button.
connectButton.addEventListener('click', () => {
    // This code inside here will only run when the button is clicked.
  //  userStoryInput.innerHTML = '';

    // Step 3: Get the story text from the input box.
    const story = userStoryInput.value;

    // A quick check to make sure the story isn't empty.
    if (story.trim() === '') {
        alert('Please share your story first!');
        return; // This stops the function from running further.
    }

    // For now, we'll just confirm that we captured the story correctly.
    console.log("Story captured:", story);

    // Step 4: Show a "loading" message on the screen for instant user feedback.
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = '<p>Connecting the dots...</p>';
}, { once: true });