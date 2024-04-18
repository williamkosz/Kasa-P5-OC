import { useState } from 'react'
import './Carrousel.scss'
import left from "./left_arrow.png"
import right from "./right_arrow.png"

export default function Carrousel ({ images }) {

    //Fonction pour appliquer les chevrons si plusieurs images
    const singleImage = images.length === 1;


    // Fonction pour défiler les images
    const [ currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    return (
        <div className='carrousel'>
            {!singleImage && ( // Affichage des chevrons si plusieurs images
                <div className='btn-slide'>
                    <img src={left} className='left' alt='left arrow' onClick={prevSlide}/>
                    <img src={right} className='right' alt='right arrow' onClick={nextSlide}/>
                </div>
             )}
             <div className='slides-container'>
                <img src={images[currentIndex]} 
                alt={currentIndex +1}
                className='slides'
                />
             </div>
             {!singleImage && (
                <div className='imageNumber'>
                    {currentIndex + 1} / {images.length}
                </div>
             )}
        </div>
    )
}