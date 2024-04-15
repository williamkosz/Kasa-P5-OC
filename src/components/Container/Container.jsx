import './Container.scss'
import Card from '../Card/Card'

function Container(){
    //Affichage du body avec intégration des cards
    return (
        <div className='body-container'>
            <Card />
        </div>
    )
}

export default Container