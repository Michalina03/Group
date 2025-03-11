import React, { useState, useEffect } from 'react'
import Location from './Location'

function Locations() {
    function addLocation({id, name, type,dimension,residents, created}){
        return(
            <Location
            key={id}
            id={id}
            name={name}
            type={type}
            dimension = {dimension}
            residents={residents}
            created = {created}
            />
        )
    }

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setLocations(data.results);
            })
            .catch((error) => {
                console.error("Error fetching locations:", error);
            });
    }, []);


  return <div>{locations.map((location) => addLocation(location))}</div>
}

export default Locations;