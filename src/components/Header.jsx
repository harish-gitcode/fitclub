import React from 'react'
import Logo from '../assets/logo.png'
// import Bars from '../assets/bars.png'
import './Header.css'
import {Link} from 'react-scroll'
const Header = () => {

  // const mobile = window.innerWidth <= 768 ? true : false
  // const [menuOpened, setMenuOpened] = useSate(false);
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
        <ul className="header-menu">
          <li>
            <Link
            activeClass='active'
              to='home'
              span={true}
              smooth={true}
              >Home</Link>
          </li>
          <li>
          <Link
            activeClass='active'
              to='programs'
              span={true}
              smooth={true}
              >Programs</Link>
          </li>
          <li>
          <Link
              to='reason'
              span={true}
              smooth={true}
              >Why us</Link>
          </li>
          <li>
          <Link
              to='plans'
              span={true}
              smooth={true}
              >Plans</Link>
          </li>
          <li> <Link
              to='testimonial'
              span={true}
              smooth={true}
              >Testimonials</Link></li>
        </ul>
    </div>
  )
}

export default Header