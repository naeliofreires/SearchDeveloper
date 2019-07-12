import React from "react";
import Contact from "../Contact";
import { connect } from "react-redux";
import { Container } from "./style";

const SideBar = ({ user: { users } }) => (
  <Container>
    <div className="sub-container">
      {users.map(user => (
        <Contact
          key={user.id}
          name={user.name}
          url={user.url}
          login={user.login}
          avatar={user.avatar}
        />
      ))}
    </div>
  </Container>
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SideBar);
