import {useState} from 'react'
import UpdateRaceForm from './UpdateRaceForm'

function RaceCard({race, handleRegClick, handleDeleteRace, patchRace}) {
    const {id, name, date, location, 
            length, registration_fee, registrations} = race 
    const [update, setUpdate] = useState(false)
    const jsDate = new Date(date)
        
    return (
        <div className='card'>
            <h1>{name}</h1>
            <button onClick={() => handleRegClick(race)}>Details</button>
            <p>Date: {jsDate.getMonth() + 1}/{jsDate.getDate()}/{jsDate.getFullYear()}</p>
            <p>Location: {location}</p>
            <p>Distance: {length.toFixed(2)} Miles</p>
            <p>Registration Fee: ${registration_fee.toFixed(2)}</p>
            <button onClick={() => setUpdate(!update)} >Update Race</button>
            <button onClick={() => handleDeleteRace(race)}>Delete Race</button>
            {update ? 
            <UpdateRaceForm race={race} patchRace={patchRace}/> : 
            null}
        </div>
    )
}

export default RaceCard