import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul className="menuItems">
        <li>
          <NavLink className="navLi" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navLi" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
