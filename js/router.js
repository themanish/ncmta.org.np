// Define the routes and their corresponding functions
page('/', showHomePage);
page('/गार्मेन्ट-बेसिक-तालिम-का', showAboutPage);
page('*', show404Page);

// Start listening for changes to the URL
page();

// Define functions for each route
function showHomePage() {
    // Load the content for the home page
    loadContent('index.html');
}

function showAboutPage() {
    // Load the content for the about page
    loadContent('गार्मेन्ट-बेसिक-तालिम-का.html');
}

function show404Page() {
    // Load the content for the 404 page
    loadContent('404.html');
}

// Function to load the content into the main page container
function loadContent(pageName) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.querySelector('#main-container').innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load ' + pageName);
            }
        }
    };
    xhr.open('GET', pageName, true);
    xhr.send();
}