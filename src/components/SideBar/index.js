import React from "react";
import { Container } from "./style";
import Contact from "../Contact";
import { connect } from "react-redux";
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
  console.log(state);
  const { userReducer } = state;
  return {
    userResponse: userReducer
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
