// @ts-nocheck
const searchContainer = document.getElementById('nav-input-container');
const searchInput = document.getElementById('nav-input');
const heroButton = document.querySelector('.hero-button');
const heroInput = document.getElementById('hero-input');
const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const contribute = document.getElementById('contribute');
const firstSeparator = document.getElementById('nav-separator1');
const secondSeparator = document.getElementById('nav-separator2');
const items = document.querySelectorAll('.item');


//changes the border of the search section from black to green when the search bar is in focus//
searchInput.addEventListener('focus', () =>{
    searchContainer.style.border = ' 2px solid #04A77E';
});
searchInput.addEventListener('blur', () =>{
    searchContainer.style.border = '';
});

//changes the style of the hero section sign up//
let isInputFocused = false;

heroInput.addEventListener('focus', () =>{
    if(!isInputFocused){
    heroButton.style.borderRight = '3px solid hsla(165, 95%, 34%, .33)';
    heroInput.style.borderLeft = '3px solid hsla(165, 95%, 34%, .33)';
        isInputFocused = true;
    }
});
heroInput.addEventListener('blur', () =>{
    isInputFocused = false;
    heroButton.style.borderRight = '';
    heroInput.style.borderLeft = '';
});

heroButton.addEventListener('mouseenter', () =>{
    if(isInputFocused && heroInput.value.length > 1){
        heroInput.style.borderLeft= '3px solid hsla(165, 95%, 34%, 1)';
        heroButton.style.borderRight = '31px solid hsla(165, 95%, 34%, 1)';
    }
});
heroButton.addEventListener('mouseleave', () =>{
    if(isInputFocused){
        heroInput.style.borderLeft= '';
        heroButton.style.borderRight = '';
    }
});

heroButton.addEventListener('mouseenter', () =>{
    if(heroInput.value.length >= 1){
    heroInput.style.borderLeft= '3px solid hsla(165, 95%, 34%, 1)';
    heroButton.style.borderRight = '3px solid hsla(165, 95%, 34%, 1)';
    }
});
heroButton.addEventListener('mouseleave', () =>{
    if(heroInput.value.length >= 1){
    heroInput.style.borderLeft= '';
    heroButton.style.borderRight = '';
    }
});





window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const docTop = document.querySelector('#why-it-works').getBoundingClientRect().top;
    
    // Define the threshold as a percentage of the window height (e.g., 30%)
    const thresholdPercentage = 70; // Change this to your desired percentage

    // Calculate the threshold in pixels based on the percentage
    const threshold = (windowHeight * thresholdPercentage) / 100;

    if (docTop - threshold <= 0) {
        document.querySelector('.content').classList.add('active');
        document.querySelector('.parallax-bg').classList.add('active');
    } else {
        document.querySelector('.content').classList.remove('active');
        document.querySelector('.parallax-bg').classList.remove('active');
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".item-image");

    images.forEach(function(image) {
        const src = image.getAttribute("data-src");
        if (src) {
            const newImage = new Image();
            newImage.src = src;
            newImage.onload = function() {
                image.src = src;
            };
        }
    });
});
  


//navigation separation movement
signin.addEventListener('mouseenter', () =>{
    firstSeparator.style.borderRadius = '9px 0 0 9px';
    firstSeparator.style.background = 'hsla(165, 95%, 34%, .6)';
    secondSeparator.style.borderRadius = '0 9px 9px 0';
    secondSeparator.style.background = 'hsla(165, 95%, 34%, .6)';
});
signin.addEventListener('mouseleave', () =>{
    firstSeparator.style.borderRadius = '';
    firstSeparator.style.background = '';
    secondSeparator.style.borderRadius = '';
    secondSeparator.style.background = '';
})

signup.addEventListener('mouseenter', () =>{
    firstSeparator.style.background = 'hsla(165, 95%, 34%, .6)';
    firstSeparator.style.borderRadius = '0 9px 9px 0';

});
signup.addEventListener('mouseleave', () =>{
    firstSeparator.style.borderRadius = '';
    firstSeparator.style.background = '';
});

contribute.addEventListener('mouseover', () =>{
    secondSeparator.style.borderRadius = '9px 0 0 9px';
    secondSeparator.style.background = 'hsla(165, 95%, 34%, .6)';

});
contribute.addEventListener('mouseleave', () =>{
    secondSeparator.style.borderRadius = '';
    secondSeparator.style.background = '';

});

//make the pictures opacity change when scroll over
items.forEach((item) =>{
    const itemImage = item.querySelector('.item-image');
    const itemName = item.querySelector('h3');

    item.addEventListener('mouseenter', () => {
        itemImage.style.opacity = '0.9';
        itemName.style.textDecoration = 'underline';
        item.style.boxShadow = '1px 1px 3px 1px hsla(165, 95%, 34%, .15)';
    });
    
    item.addEventListener('mouseleave', () => {
        itemImage.style.opacity = '1';
        itemName.style.textDecoration = 'none';
        item.style.boxShadow = '';
    });
    
    
})


//filtering through the categories and hiding the itrrelevant information

const categoryLinks = document.querySelectorAll('.category-link');
const categorySelect = document.getElementById('category-dropdown');

// Function to update the display based on the selected category
function updateDisplay(selectedCategory) {
    const items = document.querySelectorAll('.item');
    const categoryName = document.querySelector('#category-title');

    // Handle the selected category as per your existing code
    // Add code to update the display based on the selected category
    items.forEach((item) => {
        if (item.getAttribute('data-category') === selectedCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Update the category title
    if (selectedCategory === 'all') {
        categoryName.innerHTML = `<h1>All Items</h1>`;
        items.forEach((item) => {
            item.style.display = 'flex';
        });
    } else {
        categoryName.innerHTML = `<h1>${selectedCategory.charAt(0).toUpperCase()}${selectedCategory.slice(1)}</h1>`;
    }
}

// Event listener for category links
categoryLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove the "active-category" class from all category links
        categoryLinks.forEach((categoryLink) => {
            categoryLink.classList.remove('active-category');
        });

        // Add the "active-category" class to the clicked category link
        link.classList.add('active-category');

        const selectedCategory = link.getAttribute('data-category');
        updateDisplay(selectedCategory);
    });
});

// Event listener for category select
categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    updateDisplay(selectedCategory);
});








