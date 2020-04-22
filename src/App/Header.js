import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/country">Paises</Link>
                </li>
                <li>
                  <Link to="/persons">Personas</Link>
                </li>
                <li>
                  <Link to="/cars">Autos</Link>
                </li>
                <li>
                  <Link to="/clubes">Clubes</Link>
                </li>
                <li>
                  <Link to="/provinces">Provincias</Link>
                </li>
              </ul>
            </nav>
    </header>
);

export default Header;