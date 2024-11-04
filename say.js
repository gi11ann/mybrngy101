// Function to show the newsletter pop-up
function showPopup() {
    document.getElementById('newsletterPopup').style.display = 'flex';
}

// Function to show the thank you pop-up
function showThankYouPopup() {
    document.getElementById('newsletterPopup').style.display = 'none'; // Hide newsletter pop-up
    document.getElementById('thankYouPopup').style.display = 'flex'; // Show thank you pop-up
}

// Function to show the not available pop-up
function showNotAvailablePopup() {
    document.getElementById('notAvailablePopup').style.display = 'flex'; // Show not available pop-up
    setTimeout(closeNotAvailablePopup, 5000); // Automatically close after 5 seconds
}

// Function to close the not available pop-up
function closeNotAvailablePopup() {
    document.getElementById('notAvailablePopup').style.display = 'none';
}

// Show the newsletter pop-up after 5 seconds
setTimeout(showPopup, 5000);

// Show newsletter pop-up when the subscribe button is clicked
document.getElementById('subscribeBtn').onclick = function() {
    showPopup();
};

// Function to close all pop-ups
function closePopups() {
    document.getElementById('newsletterPopup').style.display = 'none';
    document.getElementById('thankYouPopup').style.display = 'none';
    closeNotAvailablePopup(); // Use the dedicated function to close this pop-up
}

// Attach close button functionality
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        closePopups();
    };
});

// Close pop-ups when clicking outside of them
window.onclick = function(event) {
    if (event.target == document.getElementById('newsletterPopup') || 
        event.target == document.getElementById('notAvailablePopup')) {
        closePopups();
    }
};

// Handle form submission
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent actual form submission
    showThankYouPopup(); // Show thank you pop-up
};

// Show not available pop-up when Services menu item is clicked
document.querySelector('nav ul li:nth-child(2) a').onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    showNotAvailablePopup(); // Show not available pop-up
};
