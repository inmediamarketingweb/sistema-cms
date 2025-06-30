import { Helmet } from "react-helmet-async";

import './CMSHomepage.css';

function CMSHomepage(){
    return(
        <>
            <Helmet>
                <title>CMS | Iniciar sesión</title>
            </Helmet>

            <main className="csm-login-page-main">
                <section className="cms-login-page-container">
                    <div className="d-flex">
                        <img src="/assets/login/login-img.svg" alt="" />

                        <a href="/" title="">Volver al inicio</a>
                    </div>

                    <div className="d-flex-column d-flex-center-center gap-20">
                        <div className="d-flex-column d-flex-center-center gap-20">
                            <h1>Iniciar sesión</h1>

                            <form className="cms-login-page-form">
                                <fieldset>
                                    <input type="text" placeholder="Usuario"></input>
                                </fieldset>
                                <fieldset>
                                    <input type="text" placeholder="Contraseña"></input>
                                </fieldset>
                            </form>

                            <button type="submit" className="button-link button-link-1">
                                <span className="material-icons">key</span>
                                <p className="button-link-text">Ingresar</p>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CMSHomepage;
