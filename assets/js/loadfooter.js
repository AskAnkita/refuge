// loadHeader.js
document.addEventListener('DOMContentLoaded', function () {

  const scriptPath = document.currentScript.src;
  const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/assets/js/'));

  const footerUrl = `${basePath}/footer.html`;

  // Fetch the footer content
  fetch(footerUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer_placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});
