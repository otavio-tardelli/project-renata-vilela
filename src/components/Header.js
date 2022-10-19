import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a className="navLink" href="#sobre_mim">sobre mim</a></li>
            <li><a className="navLink" href="#o_espaço">o espaço</a></li>
            <li><h3>Dra. Renata Vilela</h3></li>
            <li><a className="navLink" href="#procedimentos">procedimentos</a></li>
            <li><a className="navLink" href="#contato">contato</a></li>
          </ul>
        </nav>
        <hr/>
        <div>
          <p className="static_spa">STHETIC & SPA</p>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
          </style>
        </div>
        <div  className="containerInicial">
          <h1 className="padraoDeBeleza">Padrão de beleza é você se sentir bem!</h1>
          <img className="foto_home" src="foto_home.png" alt="Foto da Dra. Renata"/>
        </div>
      </header>
    </div>
  );
}

export default Header;
