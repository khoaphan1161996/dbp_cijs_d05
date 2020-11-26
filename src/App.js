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
        strMealThumb: "",
        strMeal: "",
        strInstructions: "",
        strCategory: "",
        strArea: "",
        strTags: "",
        strIngredient: "",
        strYoutube: "",
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
    if(this.state.meal.strMealThumb != ""){
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
    
    else {
      return (
        <div className="App">
          <Header></Header>
          <Button click={this.getMeal}></Button>
        </div>
      );
    }
  }
}

export default App;
