import React from 'react';
import { useSelector } from 'react-redux';

const Showcounter = () => {

    const compteur = useSelector(state => state.compteur);

    return (
        <div>
            <h1>{compteur}</h1>
        </div>
    );
}

export default Showcounter;
