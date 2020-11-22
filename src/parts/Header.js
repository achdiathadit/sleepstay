import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../elements/Button';
import Logo from '../assets/images/logo/logo.svg';

export default function Header(props) {
  const getNavLinkClass = path => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <Fade>
      <header className='spacing-sm'>
        <div className='container'>
          <nav className='navbar navbar-expand-md navbar-light font-weight-semibold'>
            <a className='navbar-brand' href='/'>
              <img
                src={Logo}
                width='195.96px'
                height='51px'
                left='42px'
                top='196px'
                alt='logo'
              ></img>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarBurger'
              aria-controls='navbarBurger'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarBurger'>
              <ul className='navbar-nav ml-auto'>
                <li className={`nav-item${getNavLinkClass('/')}`}>
                  <Button className='nav-link' type='link' href='/'>
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/browse-places')}`}>
                  <Button
                    className='nav-link'
                    type='link'
                    href='/browse-places'
                  >
                    Browse places
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/log-in')}`}>
                  <Button className='nav-link' type='link' href='/sign-in'>
                    Sign in
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/register')}`}>
                  <Button
                    className='nav-link register'
                    type='link'
                    href='/register'
                  >
                    Register
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
