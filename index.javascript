<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Click the Button</h1>
    <button id="myButton">Click Me!</button>
    <p id="output"></p>

    <script>
        // Select the button and output elements
        const button = document.getElementById('myButton');
        const output = document.getElementById('output');

        // Add a click event listener to the button
        button.addEventListener('click', function() {
            output.textContent = 'You clicked the button!';
            alert('Button was clicked!');
        });
    </script>
</body>
</html>

