import {useState} from 'react'
import { useOutletContext } from 'react-router-dom'
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
    // const [regList, setRegList] = useState([...registrations])
    const {regs, setRegs} = useOutletContext()
    const regList = regs.filter((reg) => reg.race_id === race.id)
    
    const [update, setUpdate] = useState(false)

    return (
        <>
            <h1>{name}</h1>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>Distance: {length.toFixed(2)} Miles</p>
            <p>Registration Fee: ${registration_fee.toFixed(2)}</p>

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
                                                regList={regList}/>)}
        </>
    )

}



export default RaceInfo