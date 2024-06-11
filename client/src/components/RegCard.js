

function RegCard({registration, regList, setRegList}) {
    return (
        <div key={registration.id}>
            <h2>{registration.race.name}</h2>
            <p>{registration.bike}</p>
        </div>
    )
}

export default RegCard
