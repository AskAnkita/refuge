// loadHeader.js
document.addEventListener('DOMContentLoaded', function() {

    // Construct the URL relative to the script location
    const scriptPath = document.currentScript.src;
    const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/assets/js/'));

    const headerUrl = `${basePath}/header.html`;

    // Fetch the header content
    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

});
