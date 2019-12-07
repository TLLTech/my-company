import React, { useState } from "react";

import { Container, Content, ContentList } from "./styles";
import app from "../../assets/app.png";

import Modal from "../../components/Modal";

export default function Portfolio() {
  const a = [1, 2, 3];
  const [visible, setVisible] = useState(false);

  function handleModalVisible() {
    setVisible(true);
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
            <button onClick={handleModalVisible}>Ver Mais</button>
          </ContentList>
        ))}

        {visible && (
          <Modal>
            <h1>CDU - Caminho da Universidade</h1>
          </Modal>
        )}
      </Content>
    </Container>
  );
}
