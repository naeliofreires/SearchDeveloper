import React from "react";
import Contact from "../Contact";
import { connect } from "react-redux";
import { Container } from "./style";

const SideBar = ({ userResponse: { users } }) => (
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
  const { userReducer } = state;
  return {
    userResponse: userReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(SideBar);
