import React from "react";
import "../css/sidemanu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function sidemanu() {
  return (
    <div className="navMenu">
      <ul className="navPanel">
        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />Profile</span>
          </a>
        </li>
        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />Dashboard</span>
          </a>
        </li>

        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />Challenges</span>
          </a>
        </li>
        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />Polls</span>
          </a>
        </li>
        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs"  />Wallet</span>
          </a>
        </li>
        <li class="nav-text">
          <a href="/homepage/profile">
            <span><FontAwesomeIcon icon="fa-solid fa-coffee" size="xs" />Logout</span>
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default sidemanu;
