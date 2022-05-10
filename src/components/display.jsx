import React from 'react'

const Display = (props) => {
    console.log(props.pokemon);
    return (
        <div>
            <ul>
                {
                props.pokemon.map((pokemon, i) => {
                    return(
                        <li key={i}>{pokemon.name}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Display;