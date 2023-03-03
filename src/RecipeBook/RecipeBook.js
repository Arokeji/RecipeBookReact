import React from 'react';
import { DetailsRecipe } from '../DetailsRecipe/DetailsRecipe';
import { ListRecipe } from '../ListRecipe/ListRecipe';
import { NewRecipe } from '../NewRecipe/NewRecipe';
import './RecipeBook.scss';

const API_URL = "http://localhost:3001/recipes";

export const RecipeBook = () => {

    const [recipesList, setRecipeList] = React.useState([]);

    const [currentRecipe, setCurrentRecipe] = React.useState();

    const selectRecipe = (recipe) => {
        console.log(recipe);
        setCurrentRecipe(recipe);
    }

    const getRecipesApi = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setRecipeList(data));
    }

    React.useEffect(() => {
        getRecipesApi();
    },[]);

    return (
        <div className='recipe'>
            <NewRecipe/>
            <ListRecipe 
                recipesList={recipesList} 
                selectRecipe={selectRecipe}
            />
            <DetailsRecipe 
                currentRecipe={currentRecipe}/>
        </div>
    );
}