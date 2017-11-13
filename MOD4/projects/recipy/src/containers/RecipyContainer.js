import React, { Component } from 'react'
// import NavBar from '../components/NavBar'
import RecipyForm from '../components/RecipyForm'
import RecipySearch from '../components/RecipySearch'
import RecipyList from '../components/RecipyList'
// import RecipyCard from '../components/RecipyCard'


const apiKey = "1fb8162c409560a5761d441b47415187"

class RecipyContainer extends Component {

  state = {
    recipes: {},
    searchTerm: '',
    searchedTerm: 'chicken',
    selectedRecipe: []
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    },  () => {this.handleSearch()})
    console.log(this.state.searchTerm) //b
  }

  handleSearch = () => {
    if (this.searchTerm === ''){
      this.setState({
        searchedTerm: ""
      })
      console.log(this.state.searchedTerm)
    } else {
      searchedTerm: `${this.state.searchTerm}`
      let results = this.state.recipes.recipes
      console.log(results);//undefined
      console.log(this.state.searchedTerm); //chicken
      let searchedRecipes = results.filter((recipe) => {
        return recipe.title.toLowerCase().includes(this.state.searchedTerm.toLowerCase())
      })
      this.setState({
        recipes: searchedRecipes
      })
    }

  }


  componentDidMount(){
    fetch(`https://community-food2fork.p.mashape.com/search?key=1fb8162c409560a5761d441b47415187&q=${this.state.searchedTerm}`,
      {
        'headers':
        {
          'X-Mashape-Key': 'um4LbSiDMBmsh0Og2z436LFQ2rWOp1pqqchjsnez42ej666z6g',
          'accept': 'application/json'
        }
      })
    .then(r => r.json())
    .then(json => {
      this.setState({
        recipes: json,
    })
  })
  }



  render(){
    console.log(this.state.recipes.recipes); //undefined?
    return(
      <div>


        <RecipySearch recipes={this.state.recipes} searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <RecipyList recipes={this.state.recipes} searchTerm={this.state.searchTerm}/>

      </div>
    )
  }

}
export default RecipyContainer;

// ${this.state.searchedTerm}
