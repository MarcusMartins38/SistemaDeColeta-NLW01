import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import ToggleButton from "../../components/ToggleSwitchTheme";

import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { Container, Content, Main } from "./styles";

import logo from "../../assets/logo.svg";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Ecoleta" />
          <ToggleButton />
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </header>

        <Main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Button openModal={toggleModal}>
            <span>
              <FiLogIn />
            </span>
            <strong>Encontre pontos de coleta</strong>
          </Button>
          <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
