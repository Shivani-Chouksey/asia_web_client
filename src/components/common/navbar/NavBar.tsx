import { Link, NavLink } from "react-router-dom";

export interface Menuitems {
  menuTitle: string;
  isActive: boolean;
  iconName: string;
}
function NavBar() {
  return (
    <div className="bs-navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/impact">
            <i className="home"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios">
            <i className="portfolio"></i>
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/opportunities">
            <i className="opportunities"></i>
            <span>Opportunities</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chat">
            <i className="chat"></i>
            <span>Chat</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
