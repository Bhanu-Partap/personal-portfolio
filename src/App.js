import React from "react";
import { Container } from "react-bootstrap";
import Navmenu from "./components/Navmenu";
import Homepage from "./Pages/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Aboutpage from "./Pages/Aboutpage";
library.add(faPaperPlane);


export default function App() {
  return (
    <>
      <Navmenu />
      <Container>
        <Homepage />
        <Aboutpage />
      </Container>
    </>
  );
}
