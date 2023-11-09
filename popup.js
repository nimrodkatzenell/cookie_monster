document.addEventListener('DOMContentLoaded', function() {
    // Get all input elements
    var inputs = document.querySelectorAll('input');

    // Add event listeners to each input
    inputs.forEach(function(input, index) {
        input.addEventListener('keydown', function(event) {
            // Check if the pressed key is "Enter"
            if (event.key === 'Enter') {
                // Prevent the default behavior (form submission)
                event.preventDefault();

                // If it's not the last input, focus on the next one
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    // If it's the last input, create the cookie
                    createCookie();
                }
            }
        });
    });

    function createCookie() {
        // Implement your cookie creation logic here
        // Retrieve values from input fields and construct the cookie string
        var name = document.getElementById('nameInput').value;
        var value = document.getElementById('valueInput').value;
        // ... (similarly for other input fields)

        // Construct the cookie string
        var cookieString = name + '=' + value;

        // Set the cookie
        document.cookie = cookieString;

        console.log('Cookie created successfully!',document.cookie);
        document.getElementById('cookie').innerText = document.cookie ;
        
        
        //setTimeout(location.reload(),10000);

    }
});

