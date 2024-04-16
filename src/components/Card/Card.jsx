import './Card.scss'

function Card ({cover, title}){
    //Affichage des cards
    return(
        <article className='card'>
            <img src={cover} alt="location"></img>
            <figcaption className='cardTitle'>{title}</figcaption>
        </article>
    )
}

export default Card