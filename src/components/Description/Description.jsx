import Collapse from "../Collapse/Collapse";
import Data from "../../Data/data.json"

export default function Description ({ logementId }) {
    const logement = Data.find ((log) => log.id === logementId)

    return(
        <div>
            <Collapse 
            title = "Description"
            text={logement.description}
            />
        </div>
    )
}