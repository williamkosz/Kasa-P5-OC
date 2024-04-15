import '../style/Footer.scss'
import whiteLogo from '../image/kasa_white.svg'

function Footer () {
    const date = new Date();
    const currentYear = date.getFullYear();
    // Affichage du Footer
    return (
        <div className='footer-bar'>
            <img src={whiteLogo} alt='White Logo Kasa'></img>
            <p>© {currentYear} Kasa. All rights reserved</p>
        </div>
    )

}

export default Footer 