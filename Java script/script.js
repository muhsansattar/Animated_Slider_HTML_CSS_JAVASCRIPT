function showInfo(animal) {
    // Get the clicked div
    const clickedDiv = document.getElementById(animal);

    // If the clicked div is already expanded, revert all to default
    if (clickedDiv.classList.contains('expanded')) {
        resetAll();
        return; // Exit function after resetting
    }

    // Reset all divs to their default state
    resetAll();

    // Add 'expanded' and 'show-info' class to the clicked div
    clickedDiv.classList.add('expanded', 'show-info');

    // Shrink the other divs
    const allNameDivs = document.querySelectorAll('.name');
    allNameDivs.forEach(div => {
        if (div.id !== animal) {
            div.classList.add('shrunk');
        }
    });

    // Show the related information
    const animalInfo = document.getElementById(`${animal}-info`);
    animalInfo.style.display = 'block';

    // Hide the clicked button
    const clickedButton = clickedDiv.querySelector('.reveal-info-btn');
    clickedButton.style.display = 'none';

    // Change the background image
    const body = document.body;
    switch (animal) {
        case 'panda':
            body.style.backgroundImage = "url('images/image=1.svg')";
            break;
        case 'elephant':
            body.style.backgroundImage = "url('images/image=2.svg')";
            break;
        case 'gorilla':
            body.style.backgroundImage = "url('images/image=3.svg')";
            break;
    }
}

// Reset all divs and elements to their default state
function resetAll() {
    // Reset all name divs
    const allNameDivs = document.querySelectorAll('.name');
    allNameDivs.forEach(div => {
        div.classList.remove('expanded', 'shrunk', 'show-info');
    });

    // Hide all info sections
    const allInfoSections = document.querySelectorAll('.info');
    allInfoSections.forEach(info => info.style.display = 'none');

    // Reset all buttons to be visible again
    const allButtons = document.querySelectorAll('.reveal-info-btn');
    allButtons.forEach(button => button.style.display = 'block');

    // Reset the background image to the default
    const body = document.body;
    body.style.backgroundImage = "url('images/Image=1.svg')"; // Set to default background image
}
