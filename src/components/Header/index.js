import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>TLC</h1>
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
          <FaGithub size={25} color="#fff" />
        </li>
      </ul>
    </Container>
  );
}
