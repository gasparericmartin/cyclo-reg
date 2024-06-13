import { useOutletContext } from "react-router-dom"
import {useState} from 'react'

function RegCard({registration, cyclist}) {
    const {regs, setRegs} = useOutletContext()
    const [error, setError] = useState(false)

    function handleDelete() {
        fetch(`http://localhost:5555/registrations/${registration.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if(r.ok) {
                setRegs(regs.filter((reg) => reg.id !== registration.id))
                setError(false)
            }
            else {
                r.json().then((errorObj) => setError(errorObj.error))
            }
        })
    }
    


    if (cyclist) {
        return (
            <>
                <h2>{registration.race.name}</h2>
                <p>{registration.bike}</p>
                <button onClick={handleDelete}>Delete</button>
                {error ? <h2>{error}</h2> : null}
            </>
        )
    }
    else {
        return (
            <>
                <h2>{registration.cyclist.name}</h2>
                <p>{registration.bike}</p>
                <button onClick={handleDelete}>Delete</button>
                {error ? <h2>{error}</h2> : null}
            </>
        )
    }
}

export default RegCard
