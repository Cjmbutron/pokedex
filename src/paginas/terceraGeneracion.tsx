import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import LoadingScreen from "../componentes/LoadingScreen";
import LigasPokemon from "../componentes/ligaspokemon";

import { Pokemon } from "../types/Types";
import { waitFor } from "../utils/utils";
import styles from "./pokemons.module.css";
import Botones from "../componentes/ligaspokemon";


const TerceraGeneracion = ()=> {
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchAllPokemons = async () => {
        setIsLoading(true);
        await waitFor(1000);
        const allPokemons = await fetchPokemons();
        setPokemons(allPokemons);
        setIsLoading(false);
      };
      fetchAllPokemons();
    }, []);
  
    if (isLoading || pokemons === null) {
      return <LoadingScreen />;
    }
  
    const filteredPokemons = pokemons?.slice(252, 386).filter((pokemon) => {
      return pokemon.name.toLowerCase().match(query.toLowerCase());
    });
  
    return (
      <>
        <Header query={query} setQuery={setQuery} />
        <LigasPokemon/>
        <main>
          <nav className={styles.nav}>
            {filteredPokemons?.map((pokemon) => (
              <Link
                key={pokemon.id}
                className={styles.listItem}
                to={`/pokemons/${pokemon.name.toLowerCase()}`}
              >
                <img
                  className={styles.listItemIcon}
                  src={pokemon.imgSrc}
                  alt={pokemon.name}
                />
                <div className={styles.listItemText}>
                  <h4 >{pokemon.name}</h4>
                  <h5>{pokemon.id}</h5>
                </div>
              </Link>
            ))}
          </nav>
        </main>
        <Footer />
      </>
    );
  };

export default TerceraGeneracion
