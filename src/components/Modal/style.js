import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 20%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;
    border-radius: 10px;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  form label {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
