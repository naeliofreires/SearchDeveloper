import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Pin from "./components/Pin";
import SideBar from "./components/SideBar";
import Modal from "./components/Modal";

import { connect } from "react-redux";

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

    this.props.onRequestUser(this.state.value);
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
    return (
      <div>
        <ReactMapGL
          mapStyle="mapbox://styles/naeliofreires/cjt7v6wtq1mzu1fnkb97o667z"
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={() => this.showModal()}
        >
          <SideBar />

          <Marker
            latitude={-4.5196092}
            longitude={-38.6135818}
            offsetLeft={-20}
            offsetTop={-10}
          />
        </ReactMapGL>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer } = state;
  return {
    userResponse: userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestUser: user => dispatch({ type: "API_CALL_REQUEST", user })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
