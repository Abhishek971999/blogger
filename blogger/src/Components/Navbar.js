import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='App'>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link class='navbar-brand' to='/'>
          <i class='material-icons'>chrome_reader_mode</i>
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto ml-4'>
            <li class='nav-item active ml-3'>
              <Link class='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li class='nav-item active ml-3'>
              <Link class='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li class='nav-item active ml-3'>
              <Link class='nav-link' to='/contact'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
