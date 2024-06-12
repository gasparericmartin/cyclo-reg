import {useState} from 'react'
import UpdateRaceForm from './UpdateRaceForm'

function RaceCard({race, handleRegClick, handleDeleteRace, patchRace}) {
    const {id, name, date, location, 
            length, registration_fee, registrations} = race 
    const [update, setUpdate] = useState(false)
        
    return (
        <div className='card'>
            <h1>{name}</h1>
            <button onClick={() => handleRegClick(race)}>Details</button>
            <p>{date}</p>
            <p>{location}</p>
            <p>{length} KMs</p>
            <p>{registration_fee}</p>
            <button onClick={() => setUpdate(!update)} >Update Race</button>
            <button onClick={() => handleDeleteRace(race)}>Delete Race</button>
            {update ? 
            <UpdateRaceForm race={race} patchRace={patchRace}/> : 
            null}
        </div>
    )
}

export default RaceCard