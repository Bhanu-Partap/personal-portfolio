import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Navmenu from "./components/Navmenu";
import Homepage from "./Pages/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faMagnifyingGlass, faMagnifyingGlassLocation, faPaperPlane, faProjectDiagram, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import Aboutpage from "./Pages/Aboutpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projectpage from "./Pages/Projectpage";
import Servicespage from "./Pages/Servicespage";
import Contactpage from "./Pages/Contactpage";
library.add(faPaperPlane, faArrowUp, faSwatchbook, faMagnifyingGlass, faProjectDiagram);

export default function App() {
  function handleShadowNavBar() {
    const scrolly = window.pageYOffset;
    const header = document.getElementById("header");

    // if (scrolly > 80){
    //   header.classList.add("header")
    // }
    // else{
    //   header.classList.remove("header");
    // }

    scrolly >= 80
      ? header.classList.add("header")
      : header.classList.remove("header");
  }

  function handleScrollUpButton() {
    const scrolly = window.pageYOffset;
    const scrollup = document.querySelector(".scrollup");
    // this.scrolly >= 560
    if (scrolly >= 560) {
      scrollup.classList.add("showup");
    } else {
      scrollup.classList.remove("showup");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShadowNavBar);
    window.addEventListener("scroll", handleScrollUpButton);
  }, []);

  function scrollActive() {
    const scrolly = window.pageYOffset;
    const section = document.querySelectorAll("section[id]");
    section.forEach((current) => {
      let sectionheight = current.offsetHeight;
      let sectiontop = current.offsetTop - 50;
      let sectionid = current.getAttribute("id");
      if (scrolly > sectiontop && scrolly <= sectiontop + sectionheight) {
        document
          .querySelector(".navbar-nav a[href*=" + sectionid + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".navbar-nav a[href*=" + sectionid + "]")
          .classList.remove("active");
      }
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
  }, []);

  return (
    <>
      <Navmenu />
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Servicespage />
      <Contactpage />
      <a className="btn btn-primary scrollup" href="#">
        <FontAwesomeIcon size="2x" icon={"fa-solid fa-arrow-up"} />
      </a>
      <footer />
    </>
  );
}
