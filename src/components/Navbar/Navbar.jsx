import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Navbar = ({ currentTheme, handleSwitch }) => {
  return (
    <nav id='navbar'>
      <div className='logoContainer'>
        <div>D</div>
        <div>ockett.</div>
      </div>
      <div className='linksContainer'>
        <NavLink to={'/tasks'}>
          Task List          
          <div></div>
        </NavLink>
        <NavLink to={'/dashboard'}>
          Dashboard
          <div></div>
        </NavLink>
        <motion.button 
          onClick={handleSwitch}
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          {
            currentTheme ? 
            <FontAwesomeIcon icon={faMoon} /> :
            <FontAwesomeIcon icon={faSun} />
          }
        </motion.button>
      </div>
    </nav>
  )
}

export default Navbar
