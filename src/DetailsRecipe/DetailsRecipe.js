import './DetailsRecipe.scss';

export const DetailsRecipe = ({currentRecipe}) => {
    
    return (
        <div>
            <h2>Receta seleccionada:</h2>
            <p>Selecciona una receta</p>
            <img src={currentRecipe.imageUrl} alt='details recipe'/>
            <p>{currentRecipe.name}</p>
            <p>{currentRecipe.numPeople}</p>
            AQUI SE QUEDA
        </div>
        
    );
}