import logoHeader from '../image/kasa_red.png'
import '../style/Header.scss'
import { NavLink } from 'react-router-dom'

function Header () {
    // Affichage des éléments
    return (
        <div className = 'Header'>
            <NavLink to ="/">
            <img src= {logoHeader} alt='Red Logo Kasa'></img>
            </NavLink>
            <nav className='navbar'>
                <NavLink to="/" className= {({isActive})=> (isActive ? "navbar__link navbar__link--active" : "navbar__link")} >Accueil</NavLink>
                <NavLink to="/About" className={({isActive})=> (isActive ? "navbar__link navbar__link--active" : "navbar__link")} >A Propos</NavLink>
            </nav>
        </div>
    ) 
}

export default Header