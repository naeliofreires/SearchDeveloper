import React from "react";
import { Container } from "./styles";

const Pin = ({ avatar }) => (
  <Container>
    <img src={avatar} alt="icon" />
  </Container>
);

export default Pin;
