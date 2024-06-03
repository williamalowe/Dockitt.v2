import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
      </div>
    </nav>
  )
}

export default Navbar
