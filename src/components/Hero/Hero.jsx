import { Link } from "react-router-dom"
import './Hero.css'


function Hero(props) {
   const { cName, img, title, text, btnText, url, btnClass } = props
   return (
      <div className={cName}>
         <img src={img} alt="HerImg" />
         <div className="hero-text">
            <h1>{title}</h1>
            <p>
               {text}
            </p>
            <Link href={url} className={btnClass}> 
               {btnText}
            </Link>
         </div>
      </div>
   )
}

export default Hero