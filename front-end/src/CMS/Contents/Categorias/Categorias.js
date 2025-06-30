import './Categorias.css';

function Categorias(){
    return(
        <section className='dashboard-main-content dashboard-main-content-1'>
            <div className='dashboard-main-content-title'>
                <p className='title'>Categorías</p>

                <button className='dashboard-main-content-close-all-button' type='button'>
                    <span class="material-icons">close</span>
                </button>
            </div>

            <div className='dashboard-main-content-left'>
                <ul>
                    <li>
                        <button type='button' className=''>
                            <p>Colchones</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Camas box tarimas</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Dormitorios</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Camas funcionales</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Cabeceras</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Sofás</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <p>Complementos</p>
                            <span class="material-icons">keyboard_arrow_right</span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className=''>
                            <span class="material-icons">add_circle</span>
                            <p>Añadir categoría</p>
                        </button>
                    </li>
                </ul>
            </div>

            <div className='dashboard-main-content-right'>
                leosoplapuco
            </div>
        </section>
    )
}

export default Categorias;
