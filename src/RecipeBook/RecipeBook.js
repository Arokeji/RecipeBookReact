import React from 'react';
import { DetailsRecipe } from '../DetailsRecipe/DetailsRecipe';
import { ListRecipe } from '../ListRecipe/ListRecipe';
import { NewRecipe } from '../NewRecipe/NewRecipe';
import './RecipeBook.scss';

const API_URL = "http://localhost:3001/recipes";

export const RecipeBook = () => {

    const [recipesList, setRecipeList] = React.useState([]);

    const [currentRecipe, setCurrentRecipe] = React.useState(null);

    const selectRecipe = (recipe) => {
        setCurrentRecipe(recipe);
    }

    console.log(recipesList.length);

    const addRecipe = React.useCallback((name, people, urlImg) => {
   
        const newRecipe = {
            id: recipesList.length + 1, 
            name: name.current.value,
            numPeople: people.current.value,
            imageUrl: urlImg.current.value,
            ingredients: []
        }
        console.log(newRecipe);
        const updateRecipeList = [...recipesList, newRecipe]
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newRecipe),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setRecipeList(updateRecipeList));


    })

    const addIngredient = React.useCallback((name, quantity) => {
        const updatedRecipe = {
            ...currentRecipe,
            ingredients: [...currentRecipe.ingredients,
            {
                name: name.current.value,
                quantity: quantity.current.value
            }]
        }

        name.current.value = "";
        quantity.current.value = "";

        fetch(API_URL + "/" + currentRecipe.id, {
            method: "PUT",
            body: JSON.stringify(updatedRecipe),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(() => setCurrentRecipe(updatedRecipe));
    })

    const deleteIngredient = React.useCallback((index) => {
        const updatedRecipe = { ...currentRecipe };
        //Rehacer con filter
        const updatedIngredients = [...currentRecipe.ingredients];
        updatedIngredients.splice(index, 1);
        updatedRecipe.ingredients = updatedIngredients;
        console.log(updatedRecipe);

        fetch(API_URL + "/" + currentRecipe.id, {
            method: "PUT",
            body: JSON.stringify(updatedRecipe),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(() => setCurrentRecipe(updatedRecipe));
    })

    const getRecipesApi = React.useCallback(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setRecipeList(data));
    })

    React.useEffect(() => {
        getRecipesApi();
    }, []);

    return (
        <div className='recipe'>
            <NewRecipe
                addRecipe={addRecipe}
            />
            <ListRecipe
                recipesList={recipesList}
                selectRecipe={selectRecipe}
            />
            <DetailsRecipe
                currentRecipe={currentRecipe}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
            />
        </div>
    );
}