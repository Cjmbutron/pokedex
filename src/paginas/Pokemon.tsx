import React, { useEffect, useState } from "react";
import pokeballSrc from "../assets/pokeball.png"
import {useParams, useNavigate} from "react-router-dom"
import { PokemonDetails } from "../types/Types";
import {waitFor} from "../utils/utils"
import { fectchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../componentes/LoadingScreen";

import styles  from "./pokemon.module.css";

const Pokemons = () =>{

    const {name} = useParams()
    const [pokemon, setPokemon] = useState<PokemonDetails>()
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(()=>{
        async function getPokemon() {
            //activando la pantalla de carga
            setIsLoading(true)
            waitFor(1000)
            const fetchedPokemon = await fectchPokemon(name as string)
            setPokemon(fetchedPokemon)
            setIsLoading(false)
        }
        getPokemon()

    }, [name]  )

    if(isLoading || !pokemon){
        return<LoadingScreen/>
    }
    return(
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}> 
                <img className={styles.pokeballImg} src={pokeballSrc} alt="pokeball" />
                Go Back
            </button>
            <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
             <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
            </div>
        </>
    )
}
export default Pokemons
