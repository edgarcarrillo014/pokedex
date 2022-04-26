import {API_HOST} from "../utils/constants";
export async function getPokemonsApi(endpointUrl){
 //Peticion al apiPokemon
    try {
       //Construimos la URL en la linea 7
       const url=`${API_HOST}/pokemon?limit=20&offset=0`;
       //Ejecutamos la peticion http al servidor, la linea 9
       const response = await fetch(endpointUrl || url);
     //Recuperamos los datos que devulve la peticion en un json, linea 12
        const result = await response.json();
        //Retornamos la informacion 
        return result;
    } catch (error) {
        throw error;
    }
}
//Ponemos como parametro la url que nos devolvio la petiion getPokemon,linea19
export async function getPokmeonDetailsByUrlApi(url){

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
//peticion http para obtener los detallas de los pokemons
export async function getPokemonDetailsApi(id){
try {
    const url =`${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
} catch (error) {
    throw error;
}


}