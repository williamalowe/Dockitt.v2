import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ currentTheme, handleSwitch }) => {
  const [currentView, setCurrentView] = useState('Tasks List');
  const [showDropdown, setShowDropdown] = useState(false);
  const caretRef = useRef(null);

  const handleMobClick = (target) => {
    setShowDropdown(false);
    setCurrentView(target);
  }

  useEffect(() => {
    showDropdown ?
    caretRef.current.style.transform = 'rotate(-180deg)'
    :
    caretRef.current.style.transform = 'rotate(0deg)'
  }, [showDropdown])
  return (
    <>
    <nav id="navbar">
      <motion.div
        className="logoContainer"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Link to={"/"}>
          <div>D</div>
          <div>ockett.</div>
        </Link>
      </motion.div>
      <div className="linksContainer">
        <NavLink to={"/"}>
          Tasks List
          <div></div>
        </NavLink>
        <NavLink to={"/kanban"}>
          Kanban View
          <div></div>
        </NavLink>
        <NavLink to={"/dashboard"}>
          Dashboard
          <div></div>
        </NavLink>
        <motion.button
          onClick={handleSwitch}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          {currentTheme ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </motion.button>
      </div>
    </nav>
    <nav id='mobileNav'>
      <motion.div
        className="logoContainer"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Link onClick={() => handleMobClick('Tasks List')} to={"/"}>
          <div>D</div>
        </Link>
      </motion.div>
      <div className="mobLinks">
        <button onClick={() => setShowDropdown(!showDropdown)}>
          {currentView}
            <FontAwesomeIcon icon={faCaretDown} ref={caretRef}/>
        </button>
        <AnimatePresence>
          {
            showDropdown &&
            <motion.div 
              className="dropdown"
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: 'auto',
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
            >
              <Link onClick={() => handleMobClick('Tasks List')} to={'/'}>Tasks List</Link>
              <Link onClick={() => handleMobClick('Kanban View')} to={'/kanban'}>Kanban View</Link>
              <Link onClick={() => handleMobClick('Dashboard')} to={'/dashboard'}>Dashboard</Link>
            </motion.div>
          }
        </AnimatePresence>
      </div>
      <div className="themeToggle">
      <motion.button
          onClick={handleSwitch}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          {currentTheme ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </motion.button>
      </div>
    </nav>
   </>
  );
};

export default Navbar;
