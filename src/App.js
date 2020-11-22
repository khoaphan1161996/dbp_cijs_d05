import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Show } from './components/Show'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meal: {
        strMealThumb: "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
        strMeal: "Madeira Cake",
        strInstructions: "Pre-heat the oven to 180C/350F/Gas 4. Grease an 18cm/7in round cake tin, line the base with greaseproof paper and grease the paper.\r\nCream the butter and sugar together in a bowl until pale and fluffy. Beat in the eggs, one at a time, beating the mixture well between each one and adding a tablespoon of the flour with the last egg to prevent the mixture curdling.\r\nSift the flour and gently fold in, with enough milk to give a mixture that falls slowly from the spoon. Fold in the lemon zest.\r\nSpoon the mixture into the prepared tin and lightly level the top. Bake on the middle shelf of the oven for 30-40 minutes, or until golden-brown on top and a skewer inserted into the centre comes out clean.\r\nRemove from the oven and set aside to cool in the tin for 10 minutes, then turn it out on to a wire rack and leave to cool completely.\r\nTo serve, decorate the cake with the candied peel.",
        strCategory: "Dessert",
        strArea: "British",
        strTags: "Cake,Light,Baking,Desert",
        strIngredient: "",
        strYoutube: "https://www.youtube.com/watch?v=-YDh4WEmK_E",
      }
    }
    this.getMeal = this.getMeal.bind(this)
  }
  getMeal() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return this.setState({
          meal: {
            strMealThumb: `${data.meals[0].strMealThumb}`,
            strMeal: data.meals[0].strMeal,
            strInstructions: data.meals[0].strInstructions,
            strCategory: data.meals[0].strCategory,
            strArea: data.meals[0].strArea,
            strTags: data.meals[0].strTags,
            strIngredient: this.Ingre(data) ,
            strYoutube: data.meals[0].strYoutube,
          }
        })
      })
  }
  Ingre(data){
    let array = []
    for(let i = 1 ; i <= 20 ; i++){
      if(data.meals[0][`strIngredient${[i]}`] != ""){
      array.push(<li>{data.meals[0][`strIngredient${[i]}`]} - {data.meals[0][`strMeasure${[i]}`]}</li>
      )
  }
  }
    return array
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Button click={this.getMeal}></Button>
        <Show strMealThumb={this.state.meal.strMealThumb}
          strMeal={this.state.meal.strMeal}
          strInstructions={this.state.meal.strInstructions}
          strCategory={this.state.meal.strCategory}
          strArea={this.state.meal.strArea}
          strTags={this.state.meal.strTags}
          strIngredient={this.state.meal.strIngredient}
          strYoutube={this.state.meal.strYoutube}
        ></Show>
      </div>
    );
  }
}

export default App;
