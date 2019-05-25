import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;

  img.perfil {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 20px;
  }

  div.contact span {
    font-size: 22px;
    font-weight: bold;
    color: #000;
  }

  div.contact small {
    font-size: 16px;
    font-weight: normal;
    color: #adadad;
  }
`;
