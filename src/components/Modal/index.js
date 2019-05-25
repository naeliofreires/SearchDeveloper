import React from "react";

import { Container } from "./style";

const Modal = ({ handleClose, show, children }) => {
  return (
    <Container>
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    </Container>
  );
};

export default Modal;
