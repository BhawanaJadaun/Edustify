import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="Hero container">
   <div className="hero-text">
<h1>We Ensure better Education <br/>
for a better world</h1>
<p>Our cutiing-edge curriculum is designed to empower students with the Knowledge,slills, and experiences needed to excel in the dynamic field of education</p>
<button className="btn">Exlore more<img src = {dark_arrow}/></button>
   </div>
    </div>
  )
}

export default Hero