import React from 'react';
import './DetailsRecipe.scss';

export const DetailsRecipe = ({currentRecipe, addIngredient, deleteIngredient}) => {
    
    const nameRef = React.useRef();
    const quantityRef = React.useRef();

    return (
        <div className='details'>
            <h2 className='details__header'>Receta seleccionada:</h2>
            {currentRecipe ?
                <>
                    <img className='details__image' src={currentRecipe.imageUrl} alt='details recipe'/>
                    <p className='details__title'>{currentRecipe.name}</p>
                    <p className='details__people'>Numero de personas: {currentRecipe.numPeople}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingrediente</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentRecipe.ingredients && currentRecipe.ingredients.map((ing, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{ing.name}</td>
                                            <td>{ing.quantity}</td>
                                            <td><button onClick={() => deleteIngredient(index)}>Eliminar</button></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td><input 
                                    ref={nameRef} 
                                    type="text"
                                /></td>
                                <td><input 
                                    ref={quantityRef} 
                                    type="text"
                                /></td>
                                <td><button onClick={() => addIngredient(nameRef, quantityRef)}>Añadir</button></td>
                            </tr>
                        </tbody>
                    </table>
                </> :
                <p>Selecciona una receta</p>
            }
        </div>
    );
}