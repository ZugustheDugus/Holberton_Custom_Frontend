import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';



const Racepoint = [42.081711900361285, -70.21996049212946];
const Dog = [32.7569118686108, -117.25123654572101];
const Christian = [30.316818982336372, -89.23717045335731];
const Coronado = [32.68571222174214, -117.18794016223605];
const Destin = [30.38452671257426, -86.48682095459576];

function App() {

  return (
    render (

    <MapContainer center={[39.049164, -98.188819]} zoom={50} scrollWheelZoom={true}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker postition={[Racepoint]}>
      <Popup>Racepoint Beach</Popup>
    </Marker>
    <Marker postition={[Dog]}>
      <Popup>Dog Beach</Popup>
    </Marker>
    <Marker postition={[Christian]}>
      <Popup>Pass Christian Beach</Popup>
    </Marker>
    <Marker postition={[Coronado]}>
      <Popup>Coronado Beach</Popup>
    </Marker>
    <Marker postition={[Destin]}>
      <Popup>Destin Beach</Popup>
    </Marker>
    </MapContainer>
    )
  )

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact></Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
