import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarContainer} from './styles';
const index = () => {
  return (
    <NavbarContainer>
      <Link to='/' className='NavLink'>
        Inicio
      </Link>
      <Link to='/contacto' className='NavLink'>
        Contacto
      </Link>
      <Link to='/galeria' className='NavLink'>
        Galeria
      </Link>
    </NavbarContainer>
  );
};

export default index;
