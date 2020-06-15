import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import logo from "../../assets/logo.svg";

import "./styles.css";

interface Data {
  point: {
    id: number;
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
  };
  items: {
    title: string;
  }[];
}

const FindPoints = () => {
  const [datas, setDatas] = useState<Data[]>([]);

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
        setDatas(response.data);
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
        {datas.map((data) => (
          <div key={data.point.id} id="card">
            <img alt="Não Possui foto" src={data.point.image_url} />

            <h1>{data.point.name}</h1>
            <p id="lista_title">Lista de Items :</p>

            {data.items.map((item) => (
              <p key={item.title} id="items">
                {item.title}
              </p>
            ))}

            <div id="endereco">
              <p>{data.point.email}</p>
              <p>{data.point.whatsapp}</p>
              <p>
                {`Lat.:${data.point.latitude} Long.:${data.point.longitude}`}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindPoints;
