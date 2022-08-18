import React from 'react';
import logo from './images/nft.png'
import styles from '../styles/header_styles.module.css'


function Header() {
return (
  <div className={styles.header}>
    <img src={logo} alt="" />
   <h1>Beaches App Brooooo!</h1>

  </div>
)
}
export default Header
