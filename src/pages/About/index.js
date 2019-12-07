import React from "react";

import { Container } from "./styles";
import gerente from "../../assets/gerente-de-ti-cio.png";
import cel from "../../assets/cel.jpg";

export default function About() {
  return (
    <Container>
      <div>
        <img src={gerente} alt="Header" />
        <div>
          <h1>Quem Somos ?</h1>
          <h3>TLC - TLC - Loading Life with Technology</h3>
          <p>
            Somos uma empresa que está iniciando suas atividades, nesse ano de
            2019. Focamos no desenvolvimento Mobile e Web utilizando as melhores
            stacks do mercado, que são
            <strong> React Native, ReactJS e NodejS</strong>, tudo para ter uma
            melhor qualidade durante o desenvolvimento.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>As Tecnologias Utilizadas ? E Por que ?</h1>
          <h3>
            Utilizamos para o desenvolvimento de aplicativos mobile, o React
            Native e no desenvolvimento web é utilizado o ReactJS e NodeJS
          </h3>
          <p>
            Por que React Native, simplesmente por ser atualmente a melhor
            tecnologia para desenvolvimento mobile, onde podemos desenvolver
            aplicativos para Android e IOS tudo através de uma única tecnologia.
          </p>
          <p>
            E para o desenvolvimento web é utilizado o ReactJS para desenvolver
            o FrontEnd da aplicação e o NodeJS para desenvolver o BackEnd, tudo
            para ter uma melhor performace durante o desenvolvimento
          </p>
        </div>
        <img className="cel" src={cel} alt="cel" />
      </div>
    </Container>
  );
}
