import { Link } from 'react-router-dom'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import { useState } from 'react'

const Navbar = () => {

   const [clicked, setClicked] = useState(false)

   const handleClick = () => {
      setClicked(!clicked)
   }

   return (
      <nav className="NavbarItems">
         <h1 className="navbar-logo">VUDERA</h1>

         <div className="menu-icons">
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
         </div>

         <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
            {MenuItems.map((item, index) => {
               return (
                  <li key={index}>
                     <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                     </Link>
                  </li>
               )
            })}
            <button className=''>Sign up</button>
         </ul>
      </nav>
   )
}

export default Navbar


