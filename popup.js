document.addEventListener('DOMContentLoaded', function() {
    var userInput = document.getElementById('userInput');
    var urlList = []; // Array to store URLs

    userInput.addEventListener('keydown', function(event) {
        // Check if the pressed key is "Enter"
        if (event.key === 'Enter') {
            // Get the user input value
            var url = userInput.value;

            // Do something with the URL (for example, log it)
            console.log('Submitted URL:', url);

            // Store the URL in the array
            urlList.push(url);

            // Clear the input field
            userInput.value = '';

            // Call a function to display or process the list of URLs
            displayUrls();
        }
    });

    // Function to display or process the list of URLs
    function displayUrls() {
        // For now, simply log the list of URLs
        console.log('Stored URLs:', urlList);
    }
});
