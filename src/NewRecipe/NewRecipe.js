import './NewRecipe.scss';
import React from 'react';

export const NewRecipe = ({addRecipe}) => {
    
    const nameInputRef = React.useRef();
    const numPersInputRef = React.useRef();
    const urlImgInputRef = React.useRef();
    
    return (
        <div className='newrecipe'>
            <h2 className='newrecipe__header'>Añade una nueva receta</h2>
            <label >Introduce el nombre:
                <input type="text" className='newrecipe__input' ref={nameInputRef}></input>
            </label>
            <label>Introduce el número de personas:
                <input type="text" className='newrecipe__input' ref={numPersInputRef}></input>
            </label>
            <label>Introduce la url de la imagen:
                <input type="text" className='newrecipe__input' ref={urlImgInputRef}></input>
            </label>
            <button className='newrecipe__button' onClick={() => addRecipe( nameInputRef, numPersInputRef, urlImgInputRef )}>Añadir receta</button>
        </div>
    );
}
