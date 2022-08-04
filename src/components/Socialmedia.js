import React from "react";
import { Row, Col} from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineCoffee,
} from "react-icons/ai";

export default function Socialmedia() {
  return (
    <>
      <div className="mt-5 me-auto" style={{maxWidth:"280px"}}>
        <Row>
          <Col className="d-flex justify-content-between align-items-center">
            <span>Check Out My</span>
            <div className="btn_2">
              <a href="https://www.instagram.com/bhanupartaps25/">
                <AiOutlineInstagram className="fa-beat" size={25}/>
              </a>
            </div>
            <div className="btn_2">
              <a href="https://github.com/Bhanu-Partap">
                <AiFillGithub className="fa-beat" size={25}/>
              </a>
            </div>
            <div className="btn_2">
              <a href="https://www.buymeacoffee.com/bhanupartap">
                <AiOutlineCoffee className="fa-bounce" size={25}/>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
