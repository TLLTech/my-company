import React from "react";

import { Container } from "./styles";
import contact from "../../assets/contact.jpg";

export default function Contact() {
  return (
    <Container>
      <h1>Contato</h1>

      <div>
        <img src={contact} alt="contatos" />
        <form>
          <input id="name" placeholder="Seu nome completo" />
          <input id="email" type="email" placeholder="Seu e-mail" />
          <textarea id="mensagem" placeholder="informe sua mensagem" />
          <button>ENVIAR</button>
        </form>
      </div>
    </Container>
  );
}
