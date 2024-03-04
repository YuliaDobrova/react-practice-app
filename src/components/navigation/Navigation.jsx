import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  headerPrivateRoutes,
  headerPublicRoutes,
} from '../../routes/headerRoutes';
import { AuthContext } from '../context';
import MyButton from '../shared/button/MyButton';
import './Navigation.css';

const Navigation = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    navigate('/');
  };

  return isAuth ? (
    <>
      <ul className="NavLinkList">
        {headerPrivateRoutes.map(route => (
          <li className="NavLinkListItem" key={route.path}>
            <NavLink
              className={navData =>
                navData.isActive ? 'NavLink--active' : 'NavLink'
              }
              to={route.path}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <MyButton
        style={{
          width: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10,
        }}
        onClick={logout}
      >
        Log Out
      </MyButton>
    </>
  ) : (
    <ul className="NavLinkList">
      {headerPublicRoutes.map(route => (
        <li className="NavLinkListItem" key={route.path}>
          <NavLink
            className={navData =>
              navData.isActive ? 'NavLink--active' : 'NavLink'
            }
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
