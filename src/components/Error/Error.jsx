import "./Error.scss"
import { NavLink } from "react-router-dom"

const Error = () => {

    const documentTitle = "Kasa - Error !";
    document.title = documentTitle

    return (
        <div className="error">
            <h2>404</h2>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="return-link" >Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error