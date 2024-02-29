

import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {

    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Separação de lote para expedição</span>
                </div>

                <ul className="nav nav-pills me-3">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" aria-current="page">Separação por transportadora</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/date" className="nav-link" aria-current="page">Separação por Data</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Menu
