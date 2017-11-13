import React from 'react'
import RecipyContainer from '../containers/RecipyContainer'


const RecipyList = ({recipes}) => {
  

  const showRecipes = () => {
    if (recipes.recipes) {

      return recipes.recipes.map((recipe, index) =>{
        return <div key={index}>
        <img src={recipe.image_url} /><br></br>
        <a href={recipe.source_url}>{recipe.title}</a><br></br>
        </div>
      })

    }

  }

  return (
    <div>
      {showRecipes()}
    </div>
  )

}

export default RecipyList
