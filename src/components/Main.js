import React from 'react';
import styles from '../styles/main_styles.module.css'
import Map from './Map'


function Main() {
  // var map = L.map('map').setView([51.505, -0.09], 13);
  // const Racepoint = [42.081711900361285, -70.21996049212946];
  // const Dog = [32.7569118686108, -117.25123654572101];
  // const Christian = [30.316818982336372, -89.23717045335731];
  // const Coronado = [32.68571222174214, -117.18794016223605];
  // const Destin = [30.38452671257426, -86.48682095459576];

  return (
    <div className="main">
     <Map />
      

    </div>
  )
}
export default Main
