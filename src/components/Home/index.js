import { Component } from "react";
import { Main } from "./styledComponent";
import Navbar from "../Navbar";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 300px;
  height: 80px;
  z-index: 1000;
  iframe {
    border-radius: 12px;
    width: 100%;
    height: 80px;
    border: none;
  }
`;

class Home extends Component {
  state = {
    draw: false,
    code: true,
  };

  onClickNav = (id) => {
    if (id === "code") {
      this.setState({
        code: true,
        draw: false,
      });
    } else {
      this.setState({
        draw: true,
        code: false,
      });
    }
  };

  render() {
    const { draw, code } = this.state;
    return (
      <Main>
        <Navbar onClickNav={this.onClickNav} />
        
        {draw && !code  && (
          <iframe
            src="https://vikas-kukreti.github.io/react-canvas-draw/"
            title="WipeCoding"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        )}

        {code && !draw && (
          <iframe
            src="https://wipe-code-irappas-projects.vercel.app/"
            title="WipeCoding"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        )}
        <PlayerContainer>
          <iframe
            title="Spotify Playlist"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </PlayerContainer>
      </Main>
    );
  }
}

export default Home;
