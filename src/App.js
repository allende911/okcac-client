import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Dropdown,
  DropdownItem,
  Header,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";

function App() {
  const [data, setData] = useState();
  const apiKey = "71PgF4a1No2KkLNAdXotutwLCTPbZ4NgJ8PpEhC1";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Container
      className="App"
      style={{
        backgroundColor: "#0d1821",
        minHeight: "100vh",
        minWidth: "100%",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('./04.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Segment as="nav" basic>
        <Menu secondary pointing inverted>
          <Menu.Item>
            <Image as="img" size="small" src="../assets/logo.png" />
          </Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Events</Menu.Item>
          <Menu.Item>Forum</Menu.Item>
        </Menu>
      </Segment>
      <Container text style={{ marginTop: "6em" }}>
        <Header inverted as="h1" size="huge" style={{ fontSize: "3.5rem" }}>
          Explore the night sky with us.
        </Header>
        <Header inverted as="h2" size="small">
          Established 1958.
        </Header>

        <Dropdown>
          <DropdownItem>Join the Club</DropdownItem>
        </Dropdown>
      </Container>
    </Container>
  );
}

export default App;
