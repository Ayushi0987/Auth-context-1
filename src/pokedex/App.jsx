import React, {useState, useEffect} from 'react'
import PokemonContainer from './Components/PokemonContainer';
import './style.css'
import PokemonModal from './Components/PokemonModal';


export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemonApi, setCurrentPokemonApi] = useState('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1')
  const [selectPokemonInModal, setSelectedPokemonInModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
   
  function assignPokemonToModal(assignedPokemon){
    // console.log(assignedPokemon);
    setSelectedPokemonInModal(assignedPokemon)
  }
  function closeModal(){
    setSelectedPokemonInModal("")
  }

  async function getPokemonData() {
      // handle negative case first
      if(!currentPokemonApi){
        return;
      }
      try {
        const response = await fetch(currentPokemonApi);
        if(!response.ok){
          throw new error('Something went wrong')
        }
        const pokemonData = await response.json();
        // console.log(pokemonData);
        // console.log(pokemonData[0].results);
        setCurrentPokemonApi(pokemonData[0]?.next ? pokemonData[0].next : null);
        const apiArray = pokemonData[0].results.map((pokemon)=> {
          return fetch(pokemon.url)
        });
        // console.log(apiArray);
        const pokemonStatsResponse = await Promise.all(apiArray);
        const pokemonStatsJsonPromises = pokemonStatsResponse.map((soloApiResponse)=>{
          if(!soloApiResponse.ok){
            throw new Error('Something went wrong')
          }
          return soloApiResponse.json();
        }); 
        const pokemonStats = await Promise.all(pokemonStatsJsonPromises);
        const formatedPokemonStats = pokemonStats.map((pokemonStat)=>{
            return pokemonStat[0]
        })
        // console.log(formatedPokemonStats);
        setPokemons((prev)=> [...prev, ...formatedPokemonStats]);
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
  }
  useEffect(()=> {
    getPokemonData();
  }, []);

    return (
      <>
        <div className='headingSection'>
            <div className='headingContainer'>
                <h1 className='heading'>Pokemon Kingdom</h1>
                <h1 className='heading'>Pokemon Kingdom</h1>
            </div>
        </div>
    <div className='container'>
    
      {selectPokemonInModal ? <PokemonModal pokemonData={selectPokemonInModal} selectPokemonInModal={selectPokemonInModal} closeModal={closeModal}/> : null}
      {!isLoading ? <PokemonContainer 
                        pokemons={pokemons}
                        assignPokemonToModal={assignPokemonToModal}
                    /> : ("Loading...")}
      {!isLoading && currentPokemonApi ? <button onClick={getPokemonData}>More Pokemons</button> : null}
    </div>
    </>
  )
}
