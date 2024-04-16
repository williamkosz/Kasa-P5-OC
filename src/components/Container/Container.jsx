import './Container.scss'
import Card from '../Card/Card'
import data from "../../Data/data.json"
import { NavLink } from 'react-router-dom'

function Container(){
    //Affichage du body avec intégration des cards
    return (
        <div className='body-container'>
            {data.map((renting) => (
                <NavLink key={renting.id} to={`src/pages/Accomodation/${renting.id}`}>
                    <Card 
                    cover={renting.cover} 
                    title={renting.title} className/>
                </NavLink>
            )
        )}
        </div>
    )
}

export default Container