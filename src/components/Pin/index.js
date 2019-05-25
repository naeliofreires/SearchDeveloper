import React, { Component } from "react";
import { Container } from "./styles";

const img =
  "https://scontent.ffor20-1.fna.fbcdn.net/v/t1.0-9/49343332_2049666045113070_61548642288271360_o.jpg?_nc_cat=106&_nc_eui2=AeFsY1eO1l6rcY4w8kzdWjoUZL3GISwGG7-nKGB-1Vsi-AZTTscBNj7INmCLtIXAG9C7N7LC_mdkSAqCyg0lfXePNIbRtnOZEuMTcw3iDvDXWA&_nc_ht=scontent.ffor20-1.fna&oh=f49fee4468bb578ad60a642253fe0e10&oe=5D6723D8";

class Pin extends Component {
  state = {};
  render() {
    return (
      <Container>
        <img src={img} alt="icon" />
      </Container>
    );
  }
}

export default Pin;
// https://maps.googleapis.com/maps/api/geocode/json?address=Fortaleza
// &key=AIzaSyBnjOlbhKlNiQasY-rmrsH5Jsdd1S2WwGM

// console.cloud.google.com criar conta for key
