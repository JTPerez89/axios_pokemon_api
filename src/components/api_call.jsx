import React, {useState} from 'react'
import Display from './display';
import axios from 'axios';

const ApiCall = () => {
    const[pokemon, setPokemon] = useState();

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=>{
        setPokemon(response.data.results);
    })
    }


    return (
        <div>
            <button onClick={getPokemon}>Get Pokémon!</button>
            {
            pokemon?
            <Display pokemon={pokemon} />: 
            'Click to get pokemon!'
            }
        </div>
    )
}

export default ApiCall;