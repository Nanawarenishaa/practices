document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('toggleDarkMode');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    
    const imageBox = document.getElementById('imageBox');
    const recipeImageInput = document.getElementById('recipeImageInput');

    recipeImageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imageBox.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
    deleteImageButton.addEventListener('click', function () {
        imageBox.style.backgroundImage = '';
        recipeImageInput.value = '';
    
    });

    const ingredientsTextarea = document.getElementById('ingredients');
    const suggestionsList = document.getElementById('suggestions');

    ingredientsTextarea.addEventListener('input', function () {
        const keywords = ingredientsTextarea.value.split('\n');

        // Simulating suggestions (you can fetch from an API)
        const suggestions = ['salt', 'pepper', 'sugar', 'flour', 'butter', 'eggs'];

        suggestionsList.innerHTML = '';
        suggestions.forEach(suggestion => {
            if (suggestion.toLowerCase().includes(keywords[keywords.length - 1].toLowerCase())) {
                const li = document.createElement('li');
                li.textContent = suggestion;
                suggestionsList.appendChild(li);
            }
        });
    });

    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');

    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const recipeImage = document.getElementById('recipeImage').value;
        const ingredients = document.getElementById('ingredients').value;
        const description = document.getElementById('description').value;

        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipeImage}" alt="Recipe Image">
            <h3>Ingredients</h3>
            <p>${ingredients}</p>
            <h3>Description</h3>
            <p>${description}</p>
        `;

        recipeList.appendChild(recipeCard);

        // Reset form fields
        recipeForm.reset();
        suggestionsList.innerHTML = '';
    });
});
