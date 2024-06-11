

function RegCard({registration, regList, setRegList}) {
    function handleDelete() {
        fetch(`http://localhost:5555/registrations/${registration.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if(r.ok) {
                setRegList(regList.filter((reg) => reg.id !== registration.id))
            }
        })
    }
    

    if (registration.cyclist) {
        return (
            <>
                <h2>{registration.cyclist.name}</h2>
                <p>{registration.bike}</p>
                <button onClick={handleDelete}>Delete</button>
            </>
        )
    }
    else {
        return (
            <>
                <h2>{registration.race.name}</h2>
                <p>{registration.bike}</p>
            </>
        )
    }
}

export default RegCard
