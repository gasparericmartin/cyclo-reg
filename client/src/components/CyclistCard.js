import {useState} from 'react'
import RegistrationForm from './RegistrationForm'
import RegCard from './RegCard'

function CyclistCard({cyclist, races}) {
    const {id, name, age, hometown, registrations} = cyclist
    const [showReg, setShowReg] = useState(false)
    const [newReg, setNewReg] = useState(false)
    const [regList, setRegList] = useState([...registrations])

    // function RegCard(registration) {
    //     return (
    //         <div key={registration.id}>
    //             <h2>{registration.race.name}</h2>
    //             <p>{registration.bike}</p>
    //         </div>
    //     )
    // }

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

        {showReg ? regList.map((registration) => <RegCard 
                                                    registration={registration}
                                                    key={registration.id}
                                                    regList={regList}
                                                    setRegList={setRegList}/>): null}
        </>
    )
}

export default CyclistCard