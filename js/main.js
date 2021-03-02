// js code to trigger the button goes here
// Step 1: query (search) the document and select the element to show and hide
const button = document.querySelector('.hamburger-btn');

button.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});