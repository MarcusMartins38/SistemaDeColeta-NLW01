import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import logo from "../../assets/logo.svg";

import "./styles.css";

interface Point {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

const FindPoints = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const ufStorage = localStorage.getItem("@uf");
    const cityStorage = localStorage.getItem("@city");

    api
      .get("pointsByUfCity", {
        params: {
          city: cityStorage,
          uf: ufStorage,
        },
      })
      .then((response) => {
        setPoints(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {points.map((point) => (
          <div key={point.id} id="card">
            <img alt="Não Possui foto" src={point.image_url} />

            <h1>{point.name}</h1>
            <p>Lista de Items</p>

            <div id="endereco">
              <p>{point.email}</p>
              <p>{point.whatsapp}</p>
              <p>{`Lat.:${point.latitude} Long.:${point.longitude}`} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindPoints;
