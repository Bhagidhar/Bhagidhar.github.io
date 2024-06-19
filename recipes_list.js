const categories = [
  {
    name: "Chicken Dishes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPlZRNr4eiVajJoPypS2sKE_q7QVwWvKDbQ&s",
    recipes: [0, 1, 2], // Indexes of recipes in this category
  },
  {
    name: "Vegetarian Dishes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcyvoSc7ceFbrndZlK_95fU6jEc950nmBrQ&s",
    recipes: [3, 4, 5],
  },
  {
    name: "Lentil Dishes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Xm56bBxqwH9XcOLhfkXHqrKdIjTUNpAMDw&s",
    recipes: [6, 7, 8],
  },
];

const recipes = [
  {
    name: "Butter Chicken",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdjew_9keP6tHpxhGJG41JnPL1YkwAFhzug&s",
    ingredients: [
      "500g chicken breast",
      "1 cup yogurt",
      "2 tbsp lemon juice",
      "2 tsp ground cumin",
      "1 tsp cayenne pepper",
      "1 tsp garam masala",
      "1 tsp ground coriander",
      "1/4 cup butter",
      "1 cup heavy cream",
      "1 cup tomato puree",
      "1 tbsp garlic paste",
      "1 tbsp ginger paste",
      "Salt to taste",
    ],
    steps: [
      "Marinate the chicken with yogurt, lemon juice, cumin, cayenne, garam masala, coriander, and salt. Let it sit for at least 1 hour.",
      "Heat butter in a large pan over medium heat. Cook the chicken until lightly browned. Remove the chicken from the pan.",
      "In the same pan, add garlic and ginger paste. Cook until fragrant.",
      "Add tomato puree and cook for 10 minutes on medium heat.",
      "Stir in the cream and return the chicken to the pan. Simmer for another 10-15 minutes.",
      "Serve hot with naan or rice.",
    ],
  },
  {
    name: "Tandoori Chicken",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5LKyXZnLQhsjpKlIRx_4OvdayWSkJ9HGfQ&s",
    ingredients: [
      "1 whole chicken, cut into pieces",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tbsp Tandoori masala spice blend",
      "1 tbsp ginger paste",
      "1 tbsp garlic paste",
      "Salt to taste",
    ],
    steps: [
      "Make deep cuts in the chicken pieces.",
      "Mix yogurt, lemon juice, Tandoori masala, ginger paste, garlic paste, and salt to make a marinade.",
      "Marinate chicken pieces in the marinade for at least 2 hours or overnight in the refrigerator.",
      "Preheat the grill or oven to high heat.",
      "Grill or bake the chicken until fully cooked and charred in spots.",
      "Serve hot with lemon wedges and mint chutney.",
    ],
  },
  {
    name: "Chicken Biryani",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmIt4LiyOm9eA0A7dAB7gFoWmTni2-BPSSQ&s",
    ingredients: [
      "500g chicken, cut into pieces",
      "2 cups basmati rice, soaked for 30 minutes",
      "3 onions, thinly sliced",
      "3 tomatoes, chopped",
      "1/2 cup plain yogurt",
      "1/4 cup ghee or oil",
      "2 tbsp biryani masala",
      "1 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1/2 tsp saffron threads (optional)",
      "Salt to taste",
    ],
    steps: [
      "Fry the sliced onions in ghee or oil until golden brown. Remove and set aside.",
      "In the same ghee/oil, add ginger-garlic paste and fry until fragrant.",
      "Add chopped tomatoes and fry until they turn mushy.",
      "Add marinated chicken pieces and cook until they are half-cooked.",
      "Layer half of the cooked rice over the chicken.",
      "Sprinkle fried onions, biryani masala, and saffron threads (dissolved in milk or water) over the rice layer.",
      "Layer the remaining rice over the spices.",
      "Cover and cook on low heat until the chicken and rice are fully cooked and aromatic.",
      "Serve hot with raita and salad.",
    ],
  },
  {
    name: "Chole (Chickpea Curry)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiKrdcphSB2ZxMeWzJLvXJf8ougPNyWIh4w&s",
    ingredients: [
      "2 cups chickpeas (soaked overnight)",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, chopped",
      "1 tsp turmeric powder",
      "2 tsp cumin powder",
      "2 tsp coriander powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander leaves for garnish",
    ],
    steps: [
      "Pressure cook the soaked chickpeas until soft.",
      "Heat oil in a pan. Add chopped onions and cook until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for a few minutes.",
      "Add chopped tomatoes and cook until the oil separates from the masala.",
      "Add turmeric, cumin, coriander powder, and salt. Cook for 2 minutes.",
      "Add the cooked chickpeas and some water. Simmer for 10-15 minutes.",
      "Sprinkle garam masala and garnish with fresh coriander leaves. Serve hot.",
    ],
  },
  {
    name: "Palak Paneer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc57aaX4gBGbuMw10DfyFC8_Kk4MlgMOeSA&s",
    ingredients: [
      "200g paneer, cubed",
      "300g spinach leaves",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/4 cup cream",
      "1 tbsp oil",
      "Salt to taste",
      "Garam masala to taste",
    ],
    steps: [
      "Blanch the spinach leaves and blend to a smooth puree.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and cook until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for a few minutes.",
      "Add chopped tomatoes and cook until the oil separates.",
      "Add the spinach puree and cook for 5 minutes. Add salt to taste.",
      "Add paneer cubes and cook for another 5 minutes.",
      "Stir in the cream and garam masala. Serve hot with roti or naan.",
    ],
  },
  {
    name: "Aloo Gobi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7u64ubPvRSFSo7YDiY4Z2noWIxnN7x5HHrw&s",
    ingredients: [
      "2 potatoes, cubed",
      "1 small cauliflower, cut into florets",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp turmeric powder",
      "1 tsp coriander powder",
      "1 tsp cumin powder",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh coriander leaves for garnish",
    ],
    steps: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and cook until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for a few minutes.",
      "Add chopped tomatoes and cook until the oil separates.",
      "Add turmeric, coriander powder, and cumin powder. Cook for 2 minutes.",
      "Add potatoes and cauliflower. Mix well.",
      "Add salt to taste and a little water. Cover and cook until the vegetables are tender.",
      "Garnish with fresh coriander leaves. Serve hot.",
    ],
  },
  {
    name: "Dal Tadka",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQOTlXERkf6t9fhdNlkckekykIwRRjujWhA&s",
    ingredients: [
      "1 cup yellow lentils (toor dal)",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp turmeric powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp ghee",
      "Fresh coriander leaves for garnish",
    ],
    steps: [
      "Pressure cook the lentils with turmeric and salt until soft.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onions and cook until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for a few minutes.",
      "Add chopped tomatoes and cook until the oil separates.",
      "Add the cooked lentils and some water. Simmer for 10 minutes.",
      "Sprinkle garam masala and garnish with fresh coriander leaves. Serve hot with rice or roti.",
    ],
  },
  {
    name: "Masoor Dal (Red Lentil Curry)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcugDP5BWSpr478v2IbMa7PMgQ-IH6eE59EQ&s",
    ingredients: [
      "¾ cup red lentils (masoor dal)",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 teaspoon chopped ginger",
      "1 teaspoon chopped garlic",
      "1-2 green chilies (adjust to your spice preference)",
      "1 teaspoon cumin seeds",
      "½ teaspoon turmeric powder",
      "1 tablespoon vegetable oil or ghee",
      "1 teaspoon salt (or to taste)",
      "1 cup water (or more depending on desired consistency)",
      "Fresh cilantro leaves for garnish (optional)",
    ],
    steps: [
      "Rinse the red lentils thoroughly in a colander.",
      "In a pot or pressure cooker, heat oil or ghee over medium heat.",
      "Add cumin seeds and let them splutter for a few seconds.",
      "Add chopped onion and cook until softened and translucent, about 5 minutes.",
      "Add ginger, garlic, and green chilies. Sauté for another minute until fragrant.",
      "Add chopped tomato and cook until softened and mushy, about 5 minutes.",
      "Add turmeric powder and stir to coat the masala (spice mix).",
      "Rinse the lentils again and add them to the pot along with water and salt.",
      "If using a regular pot, bring to a boil, then reduce heat, cover, and simmer for 20-25 minutes, or until the lentils are soft and cooked through. Stir occasionally to prevent sticking.",
      "If using a pressure cooker, cook for 5-7 whistles on medium heat, then let the pressure release naturally for 10 minutes before opening.",
      "Once cooked, mash some of the lentils with a whisk or potato masher for a thicker consistency (optional).",
      "Taste and adjust salt to your preference.",
      "Garnish with fresh cilantro leaves before serving.",
      "Enjoy Masoor Dal with rice or roti.",
    ],
  },
  {
    name: "Tadka Dal (Yellow Lentil Curry with Tempering)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwK03MYJUDdOm05TSvvPQt5yMjOndguZgLLA&s",
    ingredients: [
      "1 cup yellow lentils (toor dal)",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "2 green chilies, chopped (adjust to your spice preference)",
      "1 tsp cumin seeds",
      "½ tsp turmeric powder",
      "1 tsp garam masala",
      "Salt to taste",
      "2 tbsp ghee or vegetable oil",
      "Fresh coriander leaves for garnish (optional)",
    ],
    steps: [
      "Rinse the yellow lentils thoroughly in a colander.",
      "In a pressure cooker or pot, cook the lentils with turmeric powder and enough water to cover them well (about 3 cups)  until soft. You can pressure cook for 20-25 minutes or simmer in a pot for 40-45 minutes.",
      "While the lentils are cooking, prepare the tadka (tempering).",
      "Heat ghee or oil in a separate pan over medium heat.",
      "Add cumin seeds and let them splutter for a few seconds.",
      "Add chopped onion and cook until golden brown.",
      "Add ginger-garlic paste and green chilies. Sauté for another minute until fragrant.",
      "Add chopped tomatoes and cook until softened and mushy, about 5 minutes.",
      "Add garam masala and stir to coat the masala.",
      "Once the lentils are cooked, mash some of them with a whisk or potato masher for a thicker consistency (optional).",
      "Add the cooked tadka (tempering) to the pot of lentils and stir to combine.",
      "Add salt to taste and simmer for a few minutes to let the flavors meld.",
      "Garnish with fresh coriander leaves before serving.",
      "Enjoy Tadka Dal with rice or roti.",
    ],
  },
];

function loadCategories() {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category, index) => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "category-card";
    categoryCard.innerHTML = `
      <img src="${category.image}" alt="${category.name}">
      <h3>${category.name}</h3>
    `;
    categoryCard.addEventListener("click", () => loadRecipes(index));
    categoryContainer.appendChild(categoryCard);
  });
}

function loadRecipes(categoryIndex) {
  const recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = ""; // Clear previous recipes

  if (categoryIndex === null) {
    // Load all recipes
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.className = "recipe-card";
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
      `;
      recipeCard.addEventListener("click", () => showRecipeDetails(recipe));
      recipeContainer.appendChild(recipeCard);
    });
  } else {
    // Load recipes for a specific category
    const selectedCategory = categories[categoryIndex];
    selectedCategory.recipes.forEach((recipeIndex) => {
      const recipe = recipes[recipeIndex];
      const recipeCard = document.createElement("div");
      recipeCard.className = "recipe-card";
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
      `;
      recipeCard.addEventListener("click", () => showRecipeDetails(recipe));
      recipeContainer.appendChild(recipeCard);
    });
  }
}

function showRecipeDetails(recipe) {
  const modal = document.getElementById("modal");
  const recipeDetails = document.getElementById("recipe-details");

  recipeDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
        </div>
        <div class="steps">
            <h3>Steps:</h3>
            <ol>
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
        </div>
    `;

  modal.style.display = "block";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

const viewAllRecipesButton = document.getElementById("view-all-recipes");
viewAllRecipesButton.addEventListener("click", () => loadRecipes(null));

window.onload = () => {
  loadCategories();
  loadRecipes(0); // Load the first category's recipes by default
};
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Implement your logic to handle the contact form submission here
  // For example, you could send an email or display a success message

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Clear the form after submission (optional)
  contactForm.reset();
});
