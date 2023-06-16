import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import LoadingScreen from "../componentes/LoadingScreen";
import style from "./ligasPokemon.module.css";

const liga=0;



const  LigasPokemon = () =>{

    const  Primerageneracion = ()=>{
        return <div>
            hola mundo
        </div>
    }

    return <div className={style.div} >
    <Link to="/primera-generacion">
    <button className={style.boton} onClick={() =><div> hola</div>  }>Primera Generacion</button>
    </Link>
    <Link to="/segunda-generacion">
    <button className={style.boton}>Segunda Generacion</button>
    </Link>
    <Link to="/tercera-generacion">
    <button className={style.boton}>tercera generacion</button>
    </Link>
    </div>
}
export default LigasPokemon