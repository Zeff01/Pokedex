import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import '../components/pokemon.css';



const Pokemon = () => {
    const [pokemondata, setPokemonData] = useState([])

    function initializeData(data) {
        const { abilities = [], types = [], stats = [], } = data || {}
        let info = {}
        let abilitiesData = []
        let typesData = []
        let statsData = []


        abilities.forEach((item) => {
            abilitiesData.push(item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1))
        })
        types.forEach((item) => {
            typesData.push(item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1))
        })
        // stats.forEach((item)=>{
        //     statsData.push(`[${item.stat.name.toUpperCase()}:${item.base_stat}]`)
        // })

        stats.forEach((item) => {
            statsData.push({ [item.stat.name]: item.base_stat })
        })

        info = {
            abilities: abilitiesData.join(', '),
            types: typesData.join(', '),
            stats: statsData,
            sprites: data.sprites.other.dream_world.front_default
        }
        console.log(info)

        return info
    }



    const { id } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {

                const dataInitialize = initializeData(data);

                setPokemonData(dataInitialize)
                // console.log(data)

            })
    }, [])


    return (
        <div>
            <Header />
            <div className='pokemonInfoContainer'>
                <div className='pokemonInfoContent'>
                    <div>
                        <img src={pokemondata.sprites}
                        className='sprites'
                        />
                        <div className='stats'>
                            {pokemondata.stats ?
                                (<><span className='statsItem'>Hp: <span className='statsnumber'>{pokemondata.stats[0].hp}</span></span>          
                                    <span className='statsItem'>Attack:<span className='statsnumber'>{pokemondata.stats[1].attack}</span></span>
                                    <span className='statsItem'>Defense:<span className='statsnumber'>{pokemondata.stats[2].defense}</span></span>
                                    <span className='statsItem'>Speed:<span className='statsnumber'>{pokemondata.stats[5].speed}</span></span>
                                </>) :
                                (<div>loading...</div>)
                            }
                        </div>
                    </div>
                    <div className='pokeInfo'>
                        <div className='name'>
                            <h3>Name: {id.charAt(0).toUpperCase() + id.slice(1)}</h3>
                        </div>
                        <div className='type'>
                        <h3> Type: {pokemondata.types}</h3>

                        </div>
                        <div className='abilities'>
                        <h3>   Abilities: {pokemondata.abilities}</h3>
                       
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Pokemon;
