import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../global/Button";
import Icon from "../global/Icon";
import ReactWhatsapp from "react-whatsapp";

import facebook from "../../assets/menudrawer__logo_fb.svg";
import instagram from "../../assets/menudrawer__logo_ig.svg";
import phone from "../../assets/menudrawer__logo_tel.svg";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  background-color: black;
  font-size: 12px;
  font-weight: 700;
  line-height: 300%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  min-width: 150px;
  height: 100vh;
  transition: right 0.3s linear;
  z-index: 99993;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

const MenuDrawer = ({ open, handleClick }) => {
  const activeLinkClassName = "menuDrawer__activeLink";
  const notActiveLinkClassName = "menuDrawer__link";

  return (
    <NavbarWrapper open={open}>
      <div className="menudrawer__divMenu">
        <Button
          css="menudrawer__btnWrapper"
          event={handleClick}
          text={<Icon css="menudrawer__xWrapper" icon={faArrowRight} />}
        />
      </div>

      <div className="menudrawer__link">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Inicio</p>
        </NavLink>
      </div>
      <div className="menudrawer__link">
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Productos</p>
        </NavLink>
      </div>
      {/* <div className="menudrawer__link">
        <ReactWhatsapp number="+5493513582675" message="Hola! Me gustaría saber el precio de" className="header__whatsapp">
          <NavLink
            className="header__link"
          >
            <p>Pedidos</p>
          </NavLink>
        </ReactWhatsapp>
      </div> */}

      <div className="menudrawer__link">
        <NavLink
          to="/sobre-nosotros"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Sobre Nosotros</p>
        </NavLink>
      </div>

      {/* <div className="menudrawer__link">
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Contacto</p>
        </NavLink>
      </div> */}

      <div className="menudrawer__ley">
        <p>
          * Contamos con la inscripción en el Instituto Nacional de Semillas, su objetivo principal es garantizar la calidad de las semillas que se utilizan para el cultivo. El mismo se encarga de regular y controlar la producción, el comercio y el uso de semillas en el país. 
        </p>
      </div>

      <div className="menudrawer__socialNetworks">
        <a
          href="https://www.facebook.com/Growking.cba"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="fb" />
        </a>

        <a
          href="https://www.instagram.com/growking.cba/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ig" />
        </a>
        <a href="tel:+5493516348772">
          <img src={phone} alt="tel" />
        </a>
      </div>
    </NavbarWrapper>
  );
};

export default MenuDrawer;
