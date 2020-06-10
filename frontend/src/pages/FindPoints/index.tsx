import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "./styles.css";

const FindPoints = () => {
  useEffect(() => {}, []);

  return (
    <div id="found_points">
      <div id="header_div">
        <header>
          <img src={logo} alt="Ecoleta" />

          <Link to="/">
            <FiArrowLeft />
            Voltar para home
          </Link>
        </header>
      </div>

      <div id="card_container">
        <div id="card">
          <img src="https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg" />

          <h1>Name</h1>
          <p>Lista de Items</p>

          <div id="endereco">
            <p>Endereço</p>
            <p>Cidade / Uf</p>
          </div>
        </div>

        <div id="card">
          <img src="https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg" />

          <h1>Name</h1>
          <p>Lista de Items</p>

          <div id="endereco">
            <p>Endereço</p>
            <p>Cidade / Uf</p>
          </div>
        </div>

        <div id="card">
          <img src="https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg" />

          <h1>Name</h1>
          <p>Lista de Items</p>

          <div id="endereco">
            <p>Endereço</p>
            <p>Cidade / Uf</p>
          </div>
        </div>

        <div id="card">
          <img src="https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743176.jpg" />

          <h1>Name</h1>
          <p>Lista de Items</p>

          <div id="endereco">
            <p>Endereço</p>
            <p>Cidade / Uf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPoints;
