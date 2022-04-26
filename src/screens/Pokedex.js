import React,{useState,useEffect} from 'react';
import {SafeAreaView } from 'react-native';
import {getPokemonsApi,getPokmeonDetailsByUrlApi} from "../api/pokemon";
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  //los estados que esten dentro del [], van a volver a ejecutarse
 const [pokemons, setPokemons] = useState([]); //Esta compuesto por varias cosas, el estado(pokemons)
 const [nextUrl,setNextUrl] = useState (null)
// y la funcion que se encarga de actualizar nuestro estado(setPokemon)
  console.log("Pokemons------>", pokemons);

useEffect (() => {
    (async() => {
      await loadPokemons();
     //Esto es una funcion anonima autoejecutable()()
    })();
  }, []);
//Esto hace una peticion a getPokemons api, linea 11
const loadPokemons = async () => {
//resolvemos la promesa con async
try {
  const response = await getPokemonsApi(nextUrl);//Aqui obtenemos todos los pokemons
  setNextUrl(response.next);


  const pokemonsArray=[];
for await (const pokemon of response.results){
const pokemonDetails = await getPokmeonDetailsByUrlApi(pokemon.url);

pokemonsArray.push({
  id: pokemonDetails.id,
  name: pokemonDetails.name,
  type: pokemonDetails.types[0].type.name,
  order: pokemonDetails.order,
  Image: pokemonDetails.sprites.other["official-artwork"].front_default,
});
}

setPokemons([...pokemons, ...pokemonsArray]);// Aqui guardamos los pokemons del get
} catch (error) {
  console.error(error);
}

};
//le pasamos los pokemones mediante props, linea 49

  return (
      <SafeAreaView>
 
    <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/> 
    </SafeAreaView>

  );
}