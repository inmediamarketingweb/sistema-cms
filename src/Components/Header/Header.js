import React, { useState, useEffect } from "react";
import GlobalVariables from "../../GlobalVariables.json";
import "./Header.css";

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/Header.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el menú");
            }
            return response.json();
        })
        .then((data) => setMenuItems(data.PrincipalMenu))
        .catch((error) => console.error("Error:", error));
}, []);

  return (
    <header>
      <div className="header-top-container">
        <div className="header-top">
          <p>{GlobalVariables.HeaderTopText}</p>
          <a href={GlobalVariables.HeaderTopLink} title={GlobalVariables.HeaderTopLink}>
            Aquí
          </a>
        </div>
      </div>

      <div className="header-bottom-container">
        <div className="header-bottom">
          <a href="/" className="header-bottom-logo">
            <img src="https://www.kamas.pe/img/logo-principal-kamas.webp" alt="Logo de Kamas" />
          </a>

          <div>
            <form></form>
            <nav>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>
                      <h2>{item.text}</h2>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
