import React, { useState, useEffect } from "react";
import GlobalVariables from "../../GlobalVariables.json";
import "./Header.css";

const Header = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch("/JSON/Header.json")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Error al cargar el menú");
        }
            return response.json();
        })

        .then((data) => setMenuItems(data.PrincipalMenu))
        .catch((error) => console.error("Error:", error));
    }, []);

    return(
        <header>
            <div className="header-top-container">
                <div className="header-top">
                    <p>{GlobalVariables.HeaderTopText}</p>
                    <a href={GlobalVariables.HeaderTopLink} title={GlobalVariables.HeaderTopLink}>Aquí</a>
                </div>
            </div>

            <div className="header-center-container">
                <div className="header-center">
                    <a href="/" className="header-center-logo">
                        <img src="https://www.kamas.pe/img/logo-principal-kamas.webp" alt="Logo de Kamas" />
                    </a>

                    <nav className="principal-menu-container">
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

                    <a href="/" className="button-link button-link-2 margin-left">
                        <p>Mi cuenta</p>
                        <span className="material-icons">person</span>
                    </a>

                    <a href="/" className="button-link button-link-2">
                        <p>Carrito</p>
                        <span class="material-icons">shopping_cart</span>
                    </a>
                    
                    <button type="button" className="principal-menu-icon">
                        <span className="material-icons menu-symbol">menu</span>
                        <span className="material-icons close-symbol">close</span>
                    </button>
                </div>
            </div>

            <div className="header-bottom-container">
                <div className="header-bottom">
                    <div className="header-search-bar">
                        <input placeholder="Buscar en kamas.pe" />
                        <button className="">
                            <span className="material-icons close-symbol">search</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
