import React from "react";

import { Container, ContantoDiv } from "./styles";
import header from "../../assets/image-header.png";

export default function Home({ history }) {
  function handleContact(e) {
    e.preventDefault();

    history.push("/contact");
  }

  return (
    <Container>
      <div>
        <img src={header} alt="Header" />
        <div>
          <h1>
            Utilizamos as melhores tecnologias, são as mesmas utilizadas por
            grandes empresas:
          </h1>
          <h3>Netflix, Mobills, Uber, Instagram ...</h3>
          <p>
            Tenha o aplicativo da sua empresa desenvolvida pelas mesmas
            tecnologias adotadas pelos melhores times do mundo, com alta
            performace e qualidade. A tecnologias usadas por nós
            <strong> React Native, ReactJS e NodejS</strong>
          </p>
        </div>
      </div>

      <ContantoDiv>
        <div>
          <h1>Entre em contato conosco:</h1>
          <p>
            Ficou interessado vamos conversar, entre em contato com agente
            <br /> e solicite seu orçamento para desenbolvedor sua aplicação
            móvel e web.
          </p>
          <button onClick={handleContact}>ENTRE EM CONTATO</button>
        </div>
      </ContantoDiv>
    </Container>
  );
}
