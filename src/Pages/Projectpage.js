import React from "react";
import { Row, Col } from "react-bootstrap";
import food from "../image/Food.png"
import pathfinder from "../image/Pathfinder.png"
import portfolio from "../image/Portfolio.png"

export default function Projectpage() {
  return (
    <section id="projects">
      <div className="main container">
            <h1 className="display-1 fw-normal ">Latest</h1>
            <h1 className="display-1 fw-normal ">Projects</h1>
            <hr />
        <Row>
          <Col>
            <h2 className="mt-4" display-1 fw-normal>Personal</h2>
            <h2 display-1 fw-normal>Portfolio</h2>
            <div className="img">
                <img className="portfolio mt-4" width={400} src={portfolio} alt="" />
            </div>
          </Col>
          <Col>
            <h2 className="mt-4" display-1 fw-normal>Pathfinder</h2>
            <h2 display-1 fw-normal>Visualizer</h2>
            <div className="img">
                <img className="pathfinder mt-4" width={400} src={pathfinder} alt="" />
            </div>
          </Col>
          <Col>
            <h2 className="mt-4" display-1 fw-normal>Food Delivery</h2>
            <h2 display-1 fw-normal>Website</h2>
            <div className="img">
                <img className="food mt-4" width={400} src={food} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
