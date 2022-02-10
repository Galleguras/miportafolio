import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { createContext, useContext } from 'react'
export const LocationContext = createContext()

const defaultContext = {
    navbarActive: null
}

const LocationProvider = (props) => {
    const { language } = useI18next()

    return (
        <LocationContext.Provider value={{ language }}>
            {props.children}
        </LocationContext.Provider>
    )
}
export default LocationProvider
export const useLocationContext = () => useContext(LocationContext)
