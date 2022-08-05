import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../image/logo2.png";

export default function Servicespage() {
  const fadeIn = {
    hide: {
      opacity: 0,
      y: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },

  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();
  
  useEffect(()=>{
    isInView ? control.start("visible") : control.start("hide");
  },[control, isInView]);

  

  return (
    <section id="services" className="bg-warning">
      <motion.div
        variants={fadeIn}
        initial="hide"
        animate={control}
        ref={ref}
        className="main container"
      >
        <Row>
          <Col className="mt-4" xs={{ order: "first" }} sm="12" md="6" lg="6">
            <h1 className="display-1 fw-normal">Services </h1>
            <h1 className="display-1 fw-normal">I Offer</h1>
            <p className="mt-4 fs-6" style={{ maxWidth: "420px" }}>
              I help ambitious business like your generate more profits💲 by
              building awerness, driving web traffic, connecting🤝 with
              customers and growing overall sales💹.
            </p>
            <Col>
              <div>
                <img className="ms-5 mt-5 logo" src={logo} width={150} alt="" />
              </div>
            </Col>
          </Col>
          <Col>
            <Row className="mt-4">
              <hr />
              <Col xs="6" sm="6" md="6" lg="6">
                <h1>01/</h1>
              </Col>
              <Col xs="6" sm="6" md="6" lg="6" >
                <h1>Web UI/UX</h1>
                <h1>Design</h1>
                <p>Explore</p>
              </Col>
            </Row>
            <Row>
              <hr />
              <Col xs="6" sm="6" md="6" lg="6">
                <h1>02/</h1>
              </Col>
              <Col xs="6" sm="6" md="6" lg="6">
                <h1>Frontend</h1>
                <h1>Design</h1>
                <p>Explore</p>
              </Col>
            </Row>
            <Row>
              <hr />
              <Col xs="6" sm="6" md="6" lg="6">
                <h1>03/</h1>
              </Col>
              <Col className="mb-4" xs="6" sm="6" md="6" lg="6">
                <h1>Images & Videos</h1>
                <h1>Editing</h1>
                <p>Explore</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
}
