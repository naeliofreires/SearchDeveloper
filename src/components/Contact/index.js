import React from "react";
import { Container } from "./style";
const naruto =
  "https://www.montink.com.br/image/cache/data/camisas/naruto-chibi-5bb44e374a4af-estampa-308-680x969.png";

const Contact = ({ img, name, username, link }) => (
  <Container>
    <img src={naruto} className="perfil" alt="imagem-perfil" />
    <div className="contact">
      <span>Naruto Uzumaki</span>
      <small>@narutouzumaki</small>
    </div>
  </Container>
);

export default Contact;
