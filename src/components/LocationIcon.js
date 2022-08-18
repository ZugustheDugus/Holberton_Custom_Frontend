import L from 'leaflet';
export const LocationIcon = L.icon({
  iconUrl: require('./images/location_icon.svg'), 
  iconRetinaUrl: require('./images/location_icon.svg'),  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
