import {useState} from 'react'
import UpdateRaceForm from './UpdateRaceForm'
import RegCard from './RegCard'

function RaceInfo({race, del, show, setShow, patchRace}) {
    const {
        id,
        name,
        date,
        location,
        length,
        registration_fee,
        registrations
        } = race   
    const [regList, setRegList] = useState([...registrations])
    
    const [update, setUpdate] = useState(false)

    return (
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{location}</p>
            <p>{length}</p>
            <p>${registration_fee}</p>

            <button onClick={() => setUpdate(!update)}>Update Race</button>
            <button onClick={() => {
                                del(race)
                                setShow(!show)}
                            }>Delete Race</button>
            
            {update ? 
            <UpdateRaceForm race={race} patchRace={patchRace}/> : 
            null}

            <h1>Registrations</h1>
    
            {regList.map((registration) => <RegCard 
                                                key={registration.id}
                                                registration={registration}
                                                regList={regList}
                                                setRegList={setRegList}/>)}
        </>
    )

}



export default RaceInfo