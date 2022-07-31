import React from 'react'
import { Col, Row } from "react-bootstrap";

export default function Aboutpage() {
  return (
    <>
    <section>
        <div className="main">
            <Col>
              <Row>
                  <h1 className="display-1 fw-normal">Skills &</h1>
                  <h1 className="display-1 fw-normal">Education</h1>
                  <p className="mt-4 fs-6" style={{ maxWidth: "420px" }}>😎 A Specialist Frontend Developer. ✨ A passion of mine is designing and solving problems through user experience, 😊 primarily on modern web UI.</p>
              </Row>
            </Col>
            
            <Col>
              <Row>
                <div >
                <h1>Education</h1>

                </div>
              </Row>
            </Col>
        </div>
    </section>
    </>
  )
}
