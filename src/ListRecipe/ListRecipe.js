import { RecipeItem } from '../RecipeItem/RecipeItem';
import './ListRecipe.scss';

export const ListRecipe = ({recipesList, selectRecipe}) => {
    
    return (
        <div>
            <h2>Listado de recetas:</h2>
            {
                recipesList.map((recipe) => {
                    return (
                        <RecipeItem 
                            key={recipe.id} 
                            recipe={recipe} 
                            selectRecipe={selectRecipe}/>
                    )
                })    
            } 
        </div>
    );

}