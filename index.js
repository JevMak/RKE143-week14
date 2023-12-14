const containerElement = document.querySelector('.container');
const backgroundImage = document.querySelector('.background-image');

document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.querySelector('.background-image');
    backgroundImage.classList.add('loaded');
});

async function getRandomRecipe() {
    const response = await fetch('https://rke143week11.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

    containerElement.innerHTML = ''; // Clear existing content

    const recipeNameTitle = document.createElement('h2');
    const recipeImage = document.createElement('img');
    const instructionsBlock = document.createElement('p');
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientLIElement = document.createElement('li');
        ingredientLIElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIElement);
    });

    recipeImage.src = imageUrl;
    recipeImage.onload = () => {
        backgroundImage.style.backgroundImage = `url(${imageUrl})`;
        containerElement.classList.add('image-loaded'); // Add a class to indicate the image has loaded
    };
    recipeNameTitle.innerHTML = recipeName;
    instructionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 2023 IAmAwesome All Rights Reserved';

    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);

    console.log(recipeName);
    console.log(imageUrl);
}

getRandomRecipe();
