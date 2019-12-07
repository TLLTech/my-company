import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>LLT</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Sobre</a>
        <a href="/portfolio">Portifolio</a>
        <a href="/contact">Contato</a>
      </nav>
      <ul>
        <li>
          <FaInstagram size={25} color="#fff" />
        </li>
        <li>
          <FaFacebook size={25} color="#fff" />
        </li>
        <li>
          <a href="https://github.com/TLLTech" target="blank">
            <FaGithub size={25} color="#fff" />
          </a>
        </li>
      </ul>
    </Container>
  );
}
