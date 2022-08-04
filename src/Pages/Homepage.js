import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Socialmedia from "../components/Socialmedia";
import profilepic from "../image/Group 2.svg";

export default function Homepage() {
  return (
    <>
      <section id="home">
        <div className="main container">
          <Row>
            <Col className="mt-4" xs={{ order: "last" }} sm="12" md="6" lg="6">
              <h1 className="display-1 fw-normal">I Have</h1>
              <h1 className="display-1 fw-normal">Design</h1>
              <h1 className="display-1 fw-normal">Experience</h1>
              <p className="mt-4 fs-6" style={{ maxWidth: "420px" }}>
                Hi I'm Frontend Developer 💻 - creating bold & brave🤔 interface
                design for companies all across the world.
              </p>
              <Stack direction="horizontal" gap="4">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk{" "}
                  <FontAwesomeIcon
                    className="fa-fade"
                    icon="fa-solid fa-paper-plane"
                  />
                </a>
                <a href="#projects" className="btn btn-light">
                  Projects <BsArrowUpRight className="fa-beat" />
                </a>
              </Stack>
              <Socialmedia />
            </Col>
            <Col
              className="mb-5 d-flex justify-content-center align-items-center"
              xs={{ order: "first" }}
              sm="12"
              md="6"
              lg="6"
            >
              <div className="main">
                <img className="profile" width={500} src={profilepic} alt="" />
                <h1 className="display-5 w-100 text-center mt-3">
                  Bhanu Partap 😎
                </h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
