import React, { useState, useEffect, ChangeEvent } from "react";

import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "./styles.css";

import axios from "axios";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const [uf, setUf] = useState<string[]>([]);
  const [city, setCity] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUf(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCity(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      <div className="Container_Modal">
        <h1>Pontos de coleta</h1>

        <select
          name="uf"
          id="uf"
          value={selectedUf}
          onChange={handleSelectedUf}
        >
          <option value="0">Selecione um UF</option>
          {uf.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </select>

        <select
          name="city"
          id="city"
          value={selectedCity}
          onChange={handleSelectCity}
        >
          <option value="0">Selecione uma Cidade</option>
          {city.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <Link to="/find-point">
          <FiSearch />
          Buscar
        </Link>
      </div>
    </ReactModal>
  );
};

export default Modal;
