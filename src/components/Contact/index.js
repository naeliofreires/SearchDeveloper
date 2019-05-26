import React from "react";
import { Container } from "./style";

const Contact = ({ avatar, name, login, url }) => (
  <Container onClick={() => window.open(url)}>
    <img src={avatar} className="perfil" alt="imagem-perfil" />
    <div className="contact">
      <span>{name}</span>
      <small>@{login}</small>
    </div>
  </Container>
);

export default Contact;
