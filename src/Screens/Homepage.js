import react, {useEffect, useState} from 'react'
import Header from '../components/header';
import PokemonTag from '../components/pokemonTag';
import { NavLink } from 'react-router-dom';


const Homepage = () =>{
    const [pokemon, setPokemon] = useState([]);

    

 useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res=>{
      return res.json()
    })
   .then(data =>{
     setPokemon(data.results)
     console.log(data)
   })
   },[])

   
    return(
        <div>
        <Header />
        <div className='container'>
          {pokemon.map(( data)=>{
            return(
                <NavLink to={`/pokemon/${data.name}`} className='pokemonLinkStyle'>
              <PokemonTag
              className='pokemonName'
              pokemons={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              key={data}
              />
              </NavLink>
            )
          })}

          
  
        </div>
      </div>
  

    )
}

export default Homepage