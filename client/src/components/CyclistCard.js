import {useState} from 'react'
import RegistrationForm from './RegistrationForm'

function CyclistCard({cyclist, races}) {
    const {id, name, age, hometown, registrations} = cyclist
    const [showReg, setShowReg] = useState(false)
    const [newReg, setNewReg] = useState(false)
    const [regList, setRegList] = useState([...registrations])

    function regCard(registration) {
        return (
            <div key={registration.id}>
                <h2>{registration.race.name}</h2>
                <p>{registration.bike}</p>
            </div>
        )
    }

    return (
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{hometown}</p>
        <button onClick={() => setShowReg(!showReg)}>Show Registrations</button>
        <button onClick={() => setNewReg(!newReg)}>New Registration</button>

        {newReg ? <RegistrationForm 
                    races={races} 
                    cyclist={cyclist}
                    regList={regList}
                    setRegList={setRegList}/> : null}

        {showReg ? regList.map((registration) => regCard(registration)): null}
        </>
    )
}

export default CyclistCard