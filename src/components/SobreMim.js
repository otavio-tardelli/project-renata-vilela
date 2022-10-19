import React from 'react';
import '../style/sobreMim.css'

function SobreMim() {
  return (
    <div>
      <img className="wave" src="wave.svg" alt="efeito para divisão da página"/>
      <div id="sobre_mim" className="containerSobreMim">
        <img className="foto_sobreMim" src="foto_sobre_mim.JPG" alt="Foto da Dra. Renata"/>
        <h5 className="sobreMimParagrafo">Loremrrfrfrfrf Ipsum is simply dummy text of the printing and typesetting industry.ff ff fffffff</h5>
        <button
          type="button"
          className="sobreMimButton"
        >
          <a
            href="https://www.instagram.com/drarenatavilela/"
            target="_blank"
            rel="noopener noreferrer"
            className="sobreMimButton"
          >
            conheça mais
          </a>
        </button>
        </div>
    </div>
  );
}

export default SobreMim;
