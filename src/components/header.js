import React from "react";
import { NavLink, Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header flex-center">
      <div>
        <Link to="/"> <h2>III-School</h2></Link>
      </div>
      <ul>
        <li>
          <NavLink exact to="/home/user-list"
            isActive={(match, location) => {
              return location.pathname === '/home' ||
                location.pathname === '/home/user-list';
            }}>
            User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/user-form"
            isActive={(match, location) => {    
              return location.pathname === '/home/user-form';
            }}>
            Add User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Header);