import { View,FlatList,StyleSheet,ActivityIndicator,Platform} from 'react-native'
import React from 'react';
import PokemonCard from "./PokemonCard";
export default function PokemonList(props) {

//mediante la desestructuracion de props recuperamos los pokemons 
const {pokemons,loadPokemons,isNext } = props;
const loadMore = () =>{
loadPokemons();}
//componente para renderizar
  return (
    <FlatList
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor= {(pokemon)=>String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item}/>}//con esto le estamos la informacion del pokemon(item)
    contentContainerStyle={styles.flatListContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext && (
        <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />
      )

    }
    />
    
  );
}
//contentContainerStyle lo usamos para agregar estilos 
const styles= StyleSheet.create({
        flatListContentContainer:{
            paddingHorizontal: 5,
            marginTop: Platform.OS ==="android" ? 30 : 0,
        } ,
        spinner:{
          marginTop: 20,
          marginBottom: Platform.OS ==="android" ? 90 :60,
        }
});