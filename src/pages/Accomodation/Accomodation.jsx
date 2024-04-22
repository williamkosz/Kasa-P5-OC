import { useParams } from "react-router-dom"; 
import { Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel"
import Tags from "../../components/Tags/Tags";
import Description from "../../components/Description/Description"
import Equipement from "../../components/Equipement/Equipement"
import Rating from "../../components/Rating/Rating";
import "./Accomodation.scss"
import Data from "../../Data/data.json"


export default function Accomodation (){
    const { appartementId } = useParams (); // Récupération de l'id dans l'URL

    const appartement = Data.find((log) => log.id === appartementId);

    if(!appartement) {
        return(
            <Navigate to = "/error" />
        )
    } else {

    return(
        <>
            <div className="carrousel-container">
                <Carrousel images = {appartement.pictures}
            />
            </div>
            <div className="all-info-container">
                <div className="left-container">
                    <div className="title-location">
                        <h1>{appartement.title}</h1>
                        <p>{appartement.location}</p>
                    </div>
                <Tags tags={appartement.tags}/>
                </div>
                <div className="right-container">
                    <div className="host-container">
                        <p>{appartement.host.name}</p>
                        <img src={appartement.host.picture} alt = {"photo de " + appartement.host.name}></img>
                    </div>
                    <div className="rating-container">
                        <Rating rating = {appartement.rating}/>
                    </div>
                </div>
            </div>
            <div className="collapse-description-container">
                    <Description logementId ={appartement.id} />
                    <Equipement logementId ={appartement.id} />
            </div>
        </>
        )
    }
}
