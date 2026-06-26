// SAMPLE RECIPES DATA
const recipes = [
{
id: 1,
name: "Pancakes",
category: "breakfast",
desc: "Fluffy pancakes with syrup.",
img: "https://source.unsplash.com/300x200/?pancakes"
},
{
id: 2,
name: "Burger",
category: "lunch",
desc: "Juicy grilled burger.",
img: "https://source.unsplash.com/300x200/?burger"
},
{
id: 3,
name: "Pizza",
category: "dinner",
desc: "Cheesy pepperoni pizza.",
img: "https://source.unsplash.com/300x200/?pizza"
},
{
id: 4,
name: "Ice Cream",
category: "dessert",
desc: "Cold creamy dessert.",
img: "https://source.unsplash.com/300x200/?icecream"
}
];

let container = document.getElementById("recipeContainer");
let searchInput = document.getElementById("searchInput");

// DISPLAY RECIPES
function displayRecipes(list){
container.innerHTML = "";

list.forEach(recipe => {
container.innerHTML += `
<div class="card" onclick="openModal('${recipe.name}','${recipe.desc}')">
<img src="${recipe.img}">
<h3>${recipe.name}</h3>
<p>${recipe.category}</p>
</div>
`;
});
}

displayRecipes(recipes);

// FILTER
function filterCategory(category){
if(category === "all"){
displayRecipes(recipes);
}else{
let filtered = recipes.filter(r => r.category === category);
displayRecipes(filtered);
}
}

// SEARCH
searchInput.addEventListener("input", function(){
let value = this.value.toLowerCase();

let filtered = recipes.filter(r =>
r.name.toLowerCase().includes(value)
);

displayRecipes(filtered);
});

// MODAL
function openModal(title, desc){
document.getElementById("modal").style.display = "flex";
document.getElementById("modalTitle").innerText = title;
document.getElementById("modalDesc").innerText = desc;
}

function closeModal(){
document.getElementById("modal").style.display = "none";
}