import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Aboutpage() {
  const fadeIn = {
    hide: {
      opacity: 0,
      y: 10,
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

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hide");
  }, [control, isInView]);
  return (
    <>
      <section id="about" className="bg-warning">
        <motion.div
          variants={fadeIn}
          initial="hide"
          animate={control}
          ref={ref}
          className="main container"
        >
          <Row>
            <Col>
              <h1 className="display-1 fw-normal">Skills &</h1>
              <h1 className="display-1 fw-normal mb-4">Education</h1>
              <p className="mt-4 fs-6 mb-4" style={{ maxWidth: "420px" }}>
                😎 A Specialist Frontend Developer💻. ✨ A passion of mine is
                designing and solving problems through user experience, 😊
                primarily on modern web UI.
              </p>
              <p className="fs-3 text-info">Skills</p>
              <Row className="mb-4">
                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <FontAwesomeIcon
                      className="fa-bounce"
                      color="#fff"
                      icon="fa-solid fa-swatchbook"
                    />
                  </div>
                  <p>Visual Design</p>
                </Col>
                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <FontAwesomeIcon
                      className="fa-bounce"
                      icon="fa-solid fa-magnifying-glass"
                    />
                  </div>
                  <p>Research</p>
                </Col>
                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <FontAwesomeIcon
                      className="fa-bounce"
                      icon="fa-solid fa-diagram-project"
                    />
                  </div>
                  <p>Prototype</p>
                </Col>
              </Row>
              <Row>
                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <SiAdobephotoshop className="fa-bounce" />
                  </div>
                  <p>Photoshop</p>
                </Col>

                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <SiAdobexd className="fa-bounce" />
                  </div>
                  <p>Adobe XD</p>
                </Col>

                <Col xs="4" sm="4" md="4" lg="4">
                  <div className="btn_2 bg-dark">
                    <TbBrandJavascript className="fa-bounce" />
                  </div>
                  <p>JavaScript</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <div className="education ">
                <h1>Education</h1>
              </div>
              <Row className="mt-4">
                <hr />
                <Col xs="12" sm="12" md="12" lg="12">
                  <Row>
                    <Col xs="3" sm="3" md="3" lg="3">
                      <p>2017</p>
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                      <p>Matriculation</p>
                      <p>D.G.S.G Public School</p>
                      <p>Marks: 6.6CGPA</p>
                    </Col>
                  </Row>
                </Col>
                <hr />
                <Col xs="12" sm="12" md="12" lg="12">
                  <Row>
                    <Col xs="3" sm="3" md="3" lg="3">
                      <p>2019</p>
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                      <p>10+2 (Non-Medical)</p>
                      <p>Govt. Model Sen. Sec. Smart school</p>
                      <p>Marks: 61.77%</p>
                    </Col>
                  </Row>
                </Col>
                <hr />
                <Col xs="12" sm="12" md="12" lg="12">
                  <Row>
                    <Col xs="3" sm="3" md="3" lg="3">
                      <p>2019-Present</p>
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                      <p>B.Tech in CSE</p>
                      <p>Gulzar Group Of Institutes</p>
                      <p>Marks: 7.57 SGPA</p>
                    </Col>
                    <hr />
                  </Row>
                </Col>
              </Row>
              <Stack className="mt-4 mx-5" direction="horizontal" gap="4">
                <a href="#projects" className="btn btn-primary">
                  Projects <BsArrowUpRight className="fa-bounce" />
                </a>
                <a href="#contact" className="btn btn-light">
                  Contact Me&nbsp;
                  <IoMdContact className="fa-bounce" />
                </a>
              </Stack>
            </Col>
          </Row>
        </motion.div>
      </section>
    </>
  );
}
