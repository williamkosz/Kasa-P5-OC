import Banner from '../../components/Banner/Banner';
import mountain from '../../image/mountain.png'
import Collapse from '../../components/Collapse/Collapse';
import AboutData from '../../Data/description.json'
import './About.scss'

const About = () => {

    const documentTitle = "Kasa - A propos de nous";
    document.title = documentTitle
    
    return (
        <>
          <Banner 
          imageUrl={mountain} />
          <div className='about-container'>
            {AboutData.map ((description, index) => (
              <Collapse 
              key={index}
              title ={description.title}
              text ={description.content}
              />
            ))}
          </div>
        </>
      )
}

export default About