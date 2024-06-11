import {useState} from 'react'

function CyclistCard({cyclist}) {
    const {id, name, age, hometown, registrations} = cyclist
    const [showReg, setShowReg] = useState(false)
    const [newReg, setNewReg] = useState(false)

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

        {showReg ? registrations.map((registration) => regCard(registration)): null}
        </>
    )
}

export default CyclistCard