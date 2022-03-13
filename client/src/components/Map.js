import {useCallback, useRef} from 'react'
import {GoogleMap, Marker, Polyline} from "@react-google-maps/api"
import mapStyle from "../mapStyle"

const Map = ({markers, setMarkers, center, onMapLoad}) => {

    // sets the size of the maps
    const mapContainerStyle = {
        position: "relative",
        width: "75vw",
        height: "97vh"
      };
    
    // loads in options to the map including the mapStyle which is how the map looks and sets allowed controls
    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
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
            //  replace time with id for key
            time: new Date()
        }])
    }, []);

    // // sets the map in reference state so we can use the reference to pan around with the panTo function
    // const mapRef = useRef();
    // const onMapLoad = useCallback((map) => {
    //   mapRef.current = map;
    // }, []);

    // // pans using lat and ln of latest marker drop
    // const panTo = useCallback(({lat,lng}) => {
    //     mapRef.current.panTo({lat,lng})
    //   }, []);

    // // makes sure only to pan when choosing answer marker position
    // if (markers.length === 1) panTo(markers[0]);

    return(
        <div className='map-box'>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={2} center={center} options={options} mapContainerClassName={'map-container'} onClick={markers.length !== 2 ? handleMarkerClick : null} onLoad={onMapLoad}>
                {markers.map(marker => <Marker key={marker._id} position={{lat: marker.lat, lng: marker.lng}} />)}
                {markers.length === 2 ? <Polyline path={[markers[0], markers[1]]} options={lineOptions} /> : null}
            </GoogleMap>
        </div>
    );
};

export default Map;