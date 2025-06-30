import './Left.css';

function Left(){
    return(
        <section className='dashboard-left-container'>
            <ul className='d-flex-column'>
                <li>
                    <button type='button' className=''>
                        <div>
                            <span className="material-icons">home</span>
                            <p>Inicio</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button type='button' className=''>
                        <div>
                            <span className="material-icons">article</span>
                            <p>Páginas</p>
                        </div>

                        <span className="material-icons">chevron_right</span>
                    </button>

                    <ul>
                        <li>
                            <a href='' title=''>
                                <p>Inicio</p>
                            </a>
                        </li>
                        <li>
                            <a href='' title=''>
                                <p>Nosotros</p>
                            </a>
                        </li>
                        <li>
                            <a href='' title=''>
                                <p>Contacto</p>
                            </a>
                        </li>
                        <li>
                            <button type='button'>
                                <p>Añadir página</p>
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type='button'>
                        <div>
                            <span className="material-icons">storefront</span>
                            <p>Catálogo</p>
                        </div>

                        <span className="material-icons">chevron_right</span>
                    </button>

                    <ul className='active'>
                        <li>
                            <button type='button'>
                                <p>Categorías</p>
                            </button>
                        </li>
                        <li>
                            <button type='button'>
                                <p>Marcas</p>
                            </button>
                        </li>
                        <li>
                            <button type='button'>
                                <p>Productos</p>
                            </button>
                        </li>
                        <li>
                            <button type='button'>
                                <p>Regalos</p>
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type='button' className=''>
                        <div>
                            <span className="material-icons">settings</span>
                            <p>Configuración</p>
                        </div>

                        {/* <span className="material-icons">chevron_right</span> */}
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Left;
