import React from 'react';
import './RecipeItem.scss';

export const RecipeItem = React.memo(({recipe, selectRecipe}) => {

    return (
        <div className='recipe__item' onClick={() => selectRecipe(recipe)}>
            <div className='recipe__picture'>
                <img className='recipe__image' src={recipe.imageUrl} alt="visual recipe"/>
            </div>
            <div className='recipe__info'>
                <h3 className='recipe__title'>{recipe.name}</h3>
                <p className='recipe__numpeople'>Numero de personas: {recipe.numPeople}</p>
            </div>
        </div>
    );
})