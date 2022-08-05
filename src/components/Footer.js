import React from 'react'
import logo from "../image/Logo.png"

export default function footer() {
  return (
    <>
    <div className="footer bg-primary mb-0">
        <p className="d-flex justify-content-center align-items-center mb-0">&copy; 2022. All Right Reserved.</p>
        <p className="d-flex justify-content-center align-items-center mb-0">Designed By Bhanu Partap &nbsp;  <img width={25} src={logo} alt="" />
 </p>
    </div>
    </>
  )
}
