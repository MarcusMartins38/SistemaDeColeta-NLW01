import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import ToggleButton from "../../components/ToggleSwitchTheme";

import logo from "../../assets/logo.svg";

import { Container, Header, Content, Card, Items, Address } from "./styles";

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
    <Container>
      <Header>
        <header>
          <img src={logo} alt="Ecoleta" />
          <ToggleButton />
          <Link to="/">
            <FiArrowLeft />
            Voltar para home
          </Link>
        </header>
      </Header>

      <Content>
        {datas.map((data) => {
          const formattedWhatsapp = data.point.whatsapp.split(".0");

          return (
            <Card key={data.point.id}>
              <img alt="Não Possui foto" src={data.point.image_url} />

              <h1>{data.point.name}</h1>
              <h2>Lista de Items :</h2>

              {data.items.map((item) => (
                <Items key={item.title}>{item.title}</Items>
              ))}

              <Address>
                <h2>Contato :</h2>
                <p>{data.point.email}</p>
                <p>{formattedWhatsapp[0]}</p>
                <p>{`Lat.: ${data.point.latitude} `}</p>
                <p>{`Long.: ${data.point.longitude}`}</p>
              </Address>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};

export default FindPoints;
