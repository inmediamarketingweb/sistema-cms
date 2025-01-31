import './Header.css'

export default function Header(){
    return (
        <header>
            <div className="header-top-container">
                <p className="header-top">¡ Por hoy 50% de descuento en productos seleccionados 🔥 !</p>
            </div>

            <div className="header-bottom-container">
                <div className="header-bottom">
                    <a href="/">
                        <img src="https://www.kamas.pe/img/logo-1690035940.jpg" alt="Logo de Kamas"/>
                    </a>
                </div>
            </div>
        </header>
    );
}
