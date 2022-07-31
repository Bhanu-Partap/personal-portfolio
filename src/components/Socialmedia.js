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
                <AiOutlineInstagram size={25}/>
              </a>
            </div>
            <div className="btn_2">
              <a href="https://github.com/Bhanu-Partap">
                <AiFillGithub size={25}/>
              </a>
            </div>
            <div className="btn_2">
              <a href="https://www.buymeacoffee.com/bhanupartap">
                <AiOutlineCoffee size={25}/>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
