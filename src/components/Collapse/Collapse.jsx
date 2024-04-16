import { useState } from "react";
import './Collapse.scss'
import vector from "../../image/vector.png"

export default function Collapse ({ title, text}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {

        setIsOpen(!isOpen);
}

    return(
        <div className= {`collapse-container ${isOpen ? 'open' : ''}`}>
            <div className={"collapse-title"}>
                <h3>{title}</h3>
                <img 
                onClick={toggleCollapse}
                src= {vector} 
                alt="chevron collapse" 
                className={`chevron ${isOpen ? "open" : ""}`}
                />
            </div>
            <div className="collapse-content">
                <ul>{text}</ul>
            </div>
        </div>
    );
};