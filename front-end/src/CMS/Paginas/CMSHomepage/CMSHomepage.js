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
                        <img src="/assets/login/login-img.svg" />
                    </div>

                    <div className="d-flex-column d-flex-center-center gap-20">
                        <form>
                            <fieldset>
                                <input type="text" placeholder="Usuario"></input>
                            </fieldset>
                            <fieldset>
                                <input type="text" placeholder="Contraseña"></input>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CMSHomepage;
