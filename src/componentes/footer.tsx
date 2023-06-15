import { Link } from "react-router-dom"
import PokemonPic from "../assets/pikachu.png"
import Location from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"
import  style  from "./footer.module.css"
 

const Footer =()=>{
    return <footer className={style.footer}>
        <Link to="/" className={style.footerLink}>
            <img src={PokemonPic} alt="Pokeball" className={style.footerIcon}/>
            pokemons
        </Link>
        <Link to="/" className={style.footerLink}>
            <img src={ItemsPic} alt="items" className={style.footerIcon}/>
            items
        </Link>
        <Link to="/" className={style.footerLink}>
            <img src={Location} alt="Pokeball" className={style.footerIcon}/>
            mapa
        </Link>

    </footer>
}

export default Footer