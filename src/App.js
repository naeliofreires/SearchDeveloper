import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Pin from "./components/Pin";
import SideBar from "./components/SideBar";
import Modal from "./components/Modal";
import Error from "./components/Error";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "./store/ducks/user";

import { TOKEN, BrasilCoordenadas } from "../src/utils/constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showModal: false,
      viewport: {
        width: "100%",
        height: "100vh",
        latitude: BrasilCoordenadas.latitude,
        longitude: BrasilCoordenadas.longitude,
        zoom: 4
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: "" });
    this.props.userRequest(this.state.value);
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  renderModal = () => {
    return (
      <Modal show={this.state.showModal} handleClose={this.hideModal}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Digite o <b>username</b> que você deseja...
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    );
  };

  render() {
    const {
      user: { users }
    } = this.props;

    return (
      <>
        <Error />
        <ReactMapGL
          mapStyle="mapbox://styles/naeliofreires/cjt7v6wtq1mzu1fnkb97o667z"
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={() => this.showModal()}
        >
          <SideBar />
          {users.map(user => (
            <Marker
              key={user.id}
              latitude={user.coordenadas_.lat}
              longitude={user.coordenadas_.lng}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Pin avatar={user.avatar} />
            </Marker>
          ))}
        </ReactMapGL>
        {this.renderModal()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
