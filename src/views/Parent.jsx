import { useState } from "react";
import Button from "../components/Button"
import Fetch from "../components/Fetch"
import axios from "axios";

const Parent = () => {

    const [pokeList, setPokeList] = useState([])


    const allPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            console.log(response);
            setPokeList(response.data.results)
        })}
        

    return (

        <div className="container d-flex flex-column align-items-center">
            <Button allPokemon={allPokemon}/>
            <Fetch  pokeList={pokeList}/>
        </div>
    )
}
export default Parent