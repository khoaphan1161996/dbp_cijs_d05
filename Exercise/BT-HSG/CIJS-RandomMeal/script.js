const rool_url =  "https://www.themealdb.com/api/json/v1/1/random.php"
const content = document.getElementById("content")
let btn =  document.getElementById("btn")

click()

async function getALlMeals(){
    const res = await fetch(rool_url)
    const list_meals = await res.json()
    content.insertAdjacentHTML('beforeend',createRandomMeal(list_meals))
}

function createRandomMeal(data){
    return `
    <div id="meal">
    <div id="p1">
        <div id="cot1">
            <img id="anh" src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}">
        </div>
        <div id="cot2">
            <h1>${data.meals[0].strMeal}</h1>
            <p><span class="CAT">Instructions: </span>${data.meals[0].strInstructions}</p>
        </div>
    </div>
    <div id="p2">
        <p class="DOG"><span class="CAT">Category: </span>${data.meals[0].strCategory}</p>
        <p class="DOG"><span class="CAT">Area: </span>${data.meals[0].strArea}</p>
        <p class="DOG"><span class="CAT">Tags: </span>${data.meals[0].strTags}</p>
        <h2>Ingredients</h2>
            <ul>
                ${Ingredients(data)}
            </ul>
    </div>
    <div id="p3">
    <h2>Video Recipe</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.meals[0].strYoutube.substr(32,11)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
    `
}

function click(){
    btn.addEventListener('click',random)
}

function random(){
    content.textContent = ""
    getALlMeals()
}

function Ingredients(data){
    let array = []
    for(let i = 1 ; i <= 20 ; i++){
        if(data.meals[0][`strIngredient${[i]}`] != ""){
        array.push(`<li>${data.meals[0][`strIngredient${[i]}`]} - ${data.meals[0][`strMeasure${[i]}`]}</li>
        `)
    }
    }
    return array
}