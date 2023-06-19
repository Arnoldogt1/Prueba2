import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();


    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbarcolor p-3">
            
            <div className='navbar-logo'>
                <Link to=''>
                <img src="./src/img/LogoHotel.jpeg" alt="" />
                </Link>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/habitaciones"
                    >
                        habitaciones
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/eventos"
                    >
                        Eventos
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/vuelos"
                    >
                        Vuelos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Login
                    </button>
                </ul>
            </div>
        </nav>
    )
}