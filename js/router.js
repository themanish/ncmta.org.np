function loadContent(pageName) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
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

function navigateTo(route) {
    console.log(route);
    switch (route) {
      case '/':
        loadContent('index.html');
        break;
      case '/गार्मेन्ट-बेसिक-तालिम-का':
        loadContent('गार्मेन्ट-बेसिक-तालिम-का');
        break;
      default:
        loadContent('404.html');
    }
  }

// Add event listeners to handle navigation
document.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.pathname);
  });
  
  window.onpopstate = () => {
    navigateTo(window.location.pathname);
  };