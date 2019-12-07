import React, { useState } from "react";
import { FaTimes, FaAppStore, FaGooglePlay } from "react-icons/fa";

import { Container, Content, ContentList } from "./styles";
import app from "../../assets/app.png";
import web from "../../assets/web.png";

import Modal from "../../components/Modal";

export default function Portfolio() {
  const a = [1];
  const [visible, setVisible] = useState(false);

  function handleModalVisible(item) {
    setVisible(item);
  }
  return (
    <Container>
      <div>
        <h1>
          <strong>Clientes</strong> vejam algums dos trabalhos já realizados
          pela nossa equipe
        </h1>
      </div>
      <Content>
        {a.map(item => (
          <ContentList item={item}>
            <h3>CDU - Caminho da Universidade</h3>
            <div>
              <img src={app} alt="app" />
              <p>
                Aplicativo desenvolvido para realizar o cadastro de alunos que
                utilizam o transporte universitário. Ajudando tanto no cadastro
                como em um controle maior dos usuários
              </p>
            </div>
            <button onClick={() => handleModalVisible(true)}>Ver Mais</button>
          </ContentList>
        ))}

        {visible && (
          <Modal>
            <button onClick={() => handleModalVisible(false)}>
              <FaTimes size={25} color="#000" />
            </button>
            <h1>CDU - Caminho da Universidade</h1>

            <div>
              <img src={app} alt="mobile" />
              <p>
                O aplicativo CDU - Caminho da Universidade, é um app que vem com
                o foco para realizar cadastro de alunos universitário que
                utlizam o transporte gratuito disponibilizado pela a prefeitura,
                também neste app é possível gerar a
                <strong>carteirinha virtual</strong> onde o usuário que utiliza
                o transporte poderá mostrar ela através de seu celular, sem
                precisar de uma carteirinha física.
                <div>
                  <button className="apple">
                    <FaAppStore size={20} color="#000" />
                    Apple Store
                  </button>
                  <button className="play">
                    <FaGooglePlay size={20} color="#000" />
                    Play Store
                  </button>
                </div>
              </p>
            </div>
            <div>
              <p>
                É um Sistema Web desenvolvido com ReactJS, para que o
                administrador ou responsável por gerenciar o processo de
                cadastro dos usuários do transporte universitário, possa
                realizar todo processo que hoje é feito manual de forma mais
                automatizada, podendo ver as informações dos usuário cadastrados
                <br></br>
                <a
                  href="https://5de50a95d2ea370008cfe079--modest-albattani-fc4b9f.netlify.com/"
                  target="blank"
                >
                  Visite o site, e veja
                </a>
              </p>
              <img className="web" src={web} alt="mobile" />
            </div>
          </Modal>
        )}
      </Content>
    </Container>
  );
}
