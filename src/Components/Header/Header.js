import GlobalVariables from '../../GlobalVariables.json';

import './Header.css';

export default function Header(){
    return (
        <header>
            <div className="header-top-container">
                <div className='header-top'>
                    <p>{GlobalVariables.HeaderTopText}</p>
                    <a href={GlobalVariables.HeaderTopLink} title={GlobalVariables.HeaderTopLink}>Aquí</a>
                </div>
            </div>

            <div className="header-bottom-container">
                <div className="header-bottom">
                    <a href="/" className='header-bottom-logo'>
                        <img src="https://www.kamas.pe/img/logo-principal-kamas.webp" alt="Logo de Kamas"/>
                    </a>
                </div>
            </div>
        </header>
    );
}
