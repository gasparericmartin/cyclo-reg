import {useState} from 'react'
import RegistrationForm from './RegistrationForm'
import RegCard from './RegCard'
import { useOutletContext } from 'react-router-dom'

function CyclistCard({cyclist, races}) {
    const {id, name, age, hometown} = cyclist
    const [showReg, setShowReg] = useState(false)
    const [newReg, setNewReg] = useState(false)
    const {regs} = useOutletContext()
    const regList = regs.filter((reg) => reg.cyclist_id === cyclist.id)

    return (
        <div className='cyclist-card'>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{hometown}</p>
        <button onClick={() => setShowReg(!showReg)}>Show Registrations</button>
        <button onClick={() => setNewReg(!newReg)}>New Registration</button>

        {newReg ? <RegistrationForm 
                    races={races} 
                    cyclist={cyclist}/> : null}

        {showReg ? regList.map((registration) => <RegCard 
                                                    registration={registration}
                                                    key={registration.id}
                                                    regList={regList}
                                                    cyclist={cyclist}/>): null}
        </div>
    )
}

export default CyclistCard