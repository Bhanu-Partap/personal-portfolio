import React from "react";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../image/logo.svg"
import cv from "../image/cv.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contactpage() {
  return (
    <section className="mb-4" id="contact">
      <div className="main container" xs={{ order: "last" }}>
        <h1 className="display-1 fw-normal  ">Let's discuss </h1>
        <h1 className="display-1 fw-normal ">Your Project</h1>
        <hr />
        <Row className="mt-4">
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="FirstName">First Name</Form.Label>
                    <Form.Control
                      id="FirstName"
                      type="text"
                      placeholder="BMW"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="LastName">Last Name</Form.Label>
                    <Form.Control
                      id="LastName"
                      type="text"
                      placeholder="Motorsport"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="E-Mail">E-mail</Form.Label>
                    <Form.Control
                      id="E-mail"
                      type="email"
                      placeholder="abcd@gmail.com"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Subject">Subject</Form.Label>
                    <Form.Control
                      id="Subject"
                      type="text"
                      placeholder="Frontend Work"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                    <Form.Label htmlFor="Message">Message </Form.Label>
                    <Form.Control
                      id="Subject"
                      type="text"
                      as="textarea"
                      placeholder="Hey its BMW Motorsport, We want you to rebuild our website."
                    />
                  </Form.Group>
                  <Button>
                    Send Message <FontAwesomeIcon
                    className="fa-fade"
                    icon="fa-solid fa-paper-plane"
                  />
                  </Button>
            </Form>

          </Col>
            <Col className="d-flex justify-content-center align-item-center">
              <div className="m-auto"><Image className="d-block" src={logo} width={150}/>
                <a className="btn btn-primary mx-3" href={cv}>Download CV</a>
              </div>
            </Col>
        </Row>
      </div>
    </section>
  );
}
