import React, {useEffect, useState} from "react";
import axios from "axios";

function PokeCard(props){

  const [pokemon, setPokemon] = useState({})

  // método que roda após a montagem do componente

  useEffect(()=>{
    pegaPokemon(props.pokemon);
  },[])

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(()=>{
    pegaPokemon(props.pokemon);
  },[pokemon])

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const renderPokemon = pokemon;

  return (
    <div>
      <p>{renderPokemon.name}</p>
      <p>{renderPokemon.weight} Kg</p>
      {renderPokemon.types && <p>{renderPokemon.types[0].type.name}</p>}
      {renderPokemon.sprites && (
        <img src={renderPokemon.sprites.front_default} alt={renderPokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
