import react from 'react'
import './pokemon.css';
import Imaged from '../image/pokeball.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navigator'>
      <div>
      <NavLink to='/'  className='navContent'>
        <img src={Imaged}
          className="pokeballImage"
        />
            Pokedex
          </NavLink>
      </div>
    </div >
  )
}

export default Header;