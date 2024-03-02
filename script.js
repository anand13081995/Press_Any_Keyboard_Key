document.addEventListener('keydown', function(event) {
    const keyPressDisplay = document.getElementById('keyPressDisplay');
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');

    // Display pressed key
    keyPressDisplay.innerText = `Pressed Key: ${event.key}`;

    // Display corresponding key code
    keyCodeDisplay.innerText = `Key Code: ${event.keyCode}`;
});
