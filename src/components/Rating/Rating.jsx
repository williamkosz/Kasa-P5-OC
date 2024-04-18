import redStar from "./red-star.png"
import greyStar from "./grey-star.png"
import "./Rating.scss"


export default function Rating ({ rating }) {

    const setStars = (rating) => {
        const stars = [];
        const maxStars = 5;

        //Boucler pour afficher le nombre max d'étoiles

        for(let i = 1; i <= maxStars; i++) {
            const allStar = i <= rating ? redStar : greyStar;

            stars.push(<img key={i} src={allStar} alt ="rating"/>)
        }

        return stars;
    }

    return (
        <div className="star-container">
            {setStars(rating)}
        </div>
    )
}

