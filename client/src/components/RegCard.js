import { useOutletContext } from "react-router-dom"

function RegCard({registration, cyclist}) {
    const {regs, setRegs} = useOutletContext()

    function handleDelete() {
        fetch(`http://localhost:5555/registrations/${registration.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if(r.ok) {
                setRegs(regs.filter((reg) => reg.id !== registration.id))
            }
        })
    }
    


    if (cyclist) {
        return (
            <>
                <h2>{registration.race.name}</h2>
                <p>{registration.bike}</p>
                <button onClick={handleDelete}>Delete</button>
            </>
        )
    }
    else {
        return (
            <>
                <h2>{registration.cyclist.name}</h2>
                <p>{registration.bike}</p>
                <button onClick={handleDelete}>Delete</button>
            </>
        )
    }
}

export default RegCard
