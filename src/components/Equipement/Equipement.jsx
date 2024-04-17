import Collapse from "../Collapse/Collapse";
import Data from "../../Data/data.json"

export default function Equipement ({ logementId }) {
    const logement = Data.find ((log) => log.id === logementId)

    const equipementList = logement.equipments.map ((equipement, index) => (
        <li key ={index}>{equipement}</li> // Récupération et création de LI équipements
    ));

        return(
            <div>
                <Collapse 
                title = "Équipements"
                text= {<ul>{equipementList}</ul>}
                />
            </div>
        )
}