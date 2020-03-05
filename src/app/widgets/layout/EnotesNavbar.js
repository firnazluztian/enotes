import React from 'react'
import { navigate } from '@reach/router'
import Space from './Space';
import { Button } from '@blueprintjs/core'
import { toastSuccess } from './toaster';

// const NavList = props => {
//     return (
//       <div>
//         <li class={'nav-item ' + props.isActive}>
//           <Link className="nav-link" to={props.link}>{props.name} <span class="sr-only">(current)</span></Link>
//         </li>
//       </div>
//     );
// }

const EnotesNavbar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light">
        E-NOTES

        <Space marginRight="10px" />
  
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse dropdown-list" id="navbarNav">
          <ul class="navbar-nav mr-auto">
              {/* <NavList name="Profile" link="/profile"/> */}
          </ul>

          <div className="login-container">
              
              <button
                  className='button is-danger'
                  type='submit'
                  onClick={() => {
                    toastSuccess('Successfully logged out')
                    navigate('/home')}
                  }
              >
                LOGOUT
              </button>
          </div>
        </div>
    </nav>
}

export default EnotesNavbar