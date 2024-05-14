// Function to create and display the popup
function createPopup() {
    // Create the popup container div
    var popupContainer = document.createElement('div');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = 'white';
    popupContainer.style.padding = '20px';
    popupContainer.style.border = '1px solid #ccc';
    popupContainer.style.borderRadius = '5px';
    popupContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    popupContainer.style.zIndex = '1000';

    // Create the close button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.onclick = function() {
        document.body.removeChild(popupContainer);
        document.body.removeChild(overlay);
    };

    // Create the content inside the popup
    var popupContent = document.createElement('div');
    popupContent.innerHTML = '<h2>DevUtils</h2><p>A simple program for all your goofing around with code needs.</p>';

    // Append the close button and content to the popup container
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(popupContent);

    // Create the overlay
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

    // Append the popup container and overlay to the document body
    document.body.appendChild(overlay);
    document.body.appendChild(popupContainer);
}

// Call the createPopup function to display the popup
createPopup();
