import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import styled from 'styled-components'

const MapaContainer = styled.div`
    /*   border: 1px solid red; */
    text-align: -webkit-center;
`

const Map = (props) => {
    const mapStyles = { height: props.height, width: props.width }

    const defaultCenter = { lat: 37.148017162743564, lng: -3.5997980443713087 }
    return (
        <MapaContainer>
            <LoadScript googleMapsApiKey="AIzaSyBSs7lvmqaF5TbCmAa5QGQdUH8xAXsCdvw">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter}
                >
                    <Marker
                        anchor="GO"
                        key="GO"
                        label="GO"
                        position={defaultCenter}
                        title="GO"
                    >
                        {/*       <InfoWindow anchor="GO" position={defaultCenter}>
                            <div>
                                <h3>AsaS</h3>
                                <div>This is your info window content</div>
                            </div>
                        </InfoWindow> */}
                    </Marker>
                </GoogleMap>
            </LoadScript>
        </MapaContainer>
    )
}

export default Map
