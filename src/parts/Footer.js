import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../elements/Button';
import Logo from '../assets/images/logo/logo.svg';

export default function Footer() {
  return (
    <Fade>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-3 mr-5'>
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
              <p className='h6 mt-2 font-weight-normal text-dark'>
                You do what you do best, <br></br>
                while we do the rest.
              </p>
            </div>

            <div className='col-auto mr-5'>
              <h6 className='mt-2 font-weight-semibold text-info'>
                For new visitor
              </h6>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <Button type='link' href='/register'>
                    Create account
                  </Button>
                </li>
                <li className='list-group-item'>
                  <Button type='link' href='/reservation'>
                    Make a reservation
                  </Button>
                </li>
                <li className='list-group-item'>
                  <Button type='link' href='/payment'>
                    How to pay
                  </Button>
                </li>
              </ul>
            </div>

            <div className='col-auto mr-5'>
              <h6 className='mt-2 font-weight-semibold text-info'>
                Explore us
              </h6>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <Button type='link' href='/career'>
                    Careers
                  </Button>
                </li>
                <li className='list-group-item'>
                  <Button type='link' href='/privacy'>
                    Privacy Policy
                  </Button>
                </li>
                <li className='list-group-item'>
                  <Button type='link' href='/terms'>
                    Terms & Conditions
                  </Button>
                </li>
              </ul>
            </div>

            <div className='col-auto'>
              <h6 className='mt-2 font-weight-semibold text-info'>
                Get in touch
              </h6>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <Button
                    isExternal
                    type='link'
                    href='mailto:support@sleepstay.com'
                  >
                    Support@sleepstay.com
                  </Button>
                </li>
                <li className='list-group-item'>
                  <Button isExternal type='link' href='tel:+622110102020'>
                    62-21-1010-2020
                  </Button>
                </li>
                <li className='list-group-item'>
                  <span>Sleepstay Inc., Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col text-center copyrights'>
              © 2020 Sleepstay, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
