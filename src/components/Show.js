import '../assets/css/Show.css'

export function Show(props) {
    return (
        <div>
            <div className="row">
                <img className="ava" src={props.strMealThumb}></img>
                <div>
                    <h4 className="name">{props.strMeal}</h4>
                    <p className="instrustion">{props.strInstructions}</p>
                </div>
            </div>
            <div>
                <p class="CAT"><strong>Category: </strong>{props.strCategory}</p>
                <p class="CAT"><strong>Area: </strong>{props.strArea}</p>
                <p class="CAT"><strong>Tags: </strong>{props.strTags}</p>
                <h2 class="CAT">Ingredients:</h2>
                <ul>
                    <li>{props.strIngredient}</li>
                </ul>
                <iframe width="560" height="315" className="yt" src={props.strYoutube.replace('watch?v=','embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}