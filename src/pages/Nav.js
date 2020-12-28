import React from "react";
import {Link} from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav>
            <ul className='list'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/tickets'>
                    <li>Tickets</li>
                </Link>
                <Link to='/issues'>
                    <li>Issues</li>
                </Link>
                <Link to='/users'>
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;