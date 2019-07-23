import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  right: 10px;
  position: fixed;

  height: 50px;
  width: fit-content;

  line-height: 42px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.6);
  background: #f55a5a;
  margin: 20px 0 10px;
  font-size: 20px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    img {
      height: 20px;
    }
  }
`;
