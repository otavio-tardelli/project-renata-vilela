import React from "react";

function Contato() {
  return(
    <div id="contato">
      <p>contato</p>
      <p>telefone: 2222-2222</p>
      <p>Rua blabla, 11, loja 2</p>
      <button
        type="button"
      >
        <a
          href="https://www.instagram.com/drarenatavilela/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mande uma mensagem
        </a>
      </button>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title="mapa"
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=R. Visc. de Pirajá, 595 - Loja 211 - Ipanema, Rio de Janeiro - RJ, 22410-001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
          <a href="https://piratebay-proxys.com/">Piratebay</a>
        </div>
      </div>
    </div>
  );
}

export default Contato;
