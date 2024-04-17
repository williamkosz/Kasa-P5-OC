import "./Tags.scss"


export default function Tags ({ tags }) {
    return(
        <div className="tag-container">
            {tags.map ((tag, index) => (

            <div className="tag" key={index}>
                {tag} 
            </div>
        ))}
            
        </div>
    )
}