import {useCallback} from 'react'
import {GoogleMap, Marker, Polyline} from "@react-google-maps/api"
import mapStyle from "../mapStyle"
import logoMarker from '../images/whereabouts_marker.png';

const Map = ({markers, setMarkers, center, onMapLoad}) => {

    // sets the size of the maps
    const mapContainerStyle = {
        position: "relative",
        width: "74vw",
        height: "80vh"
      };
    
    // loads in options to the map including the mapStyle which is how the map looks and sets allowed controls
    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {position: 3},
        minZoom: 1.75,
      };

    // style options for Polyline generated when user checks answer
    const lineOptions = {
        strokeColor: '#6a0dad',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#6a0dad',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
    }; 
    
    const handleMarkerClick = useCallback((event) => {
        setMarkers(() => [{
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
            icon: {
                url: logoMarker,
                scaledSize: new window.google.maps.Size(40,59)
            }
        }])
    }, []);

    return(
        <div className='map-box'>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={2} center={center} options={options} mapContainerClassName={'map-container'} onClick={markers.length !== 2 ? handleMarkerClick : null} onLoad={onMapLoad}>
                {markers.map(marker => <Marker key={marker._id} position={{lat: marker.lat, lng: marker.lng}} icon={marker.icon}/>)}
                {markers.length === 2 ? <Polyline path={[markers[0], markers[1]]} options={lineOptions} /> : null}
            </GoogleMap>
        </div>
    );
};

export default Map;
