alert("This is your calculator");

        // Wait until the DOM is fully loaded before running the script
        let buttonSeven = document.getElementById('seven');

        buttonSeven.addEventListener('click', function () {
            buttonSeven.textContent = '70';
        });