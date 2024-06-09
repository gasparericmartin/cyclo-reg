

function RaceInfo({race}) {
    const {
        id,
        name,
        date,
        location,
        length,
        registration_fee,
        registrations
        } = race   

    return (
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{location}</p>
            <p>{length}</p>
            <p>${registration_fee}</p>

            <button>Delete Race</button>

            <h1>Registrations</h1>
    
            {registrations.map((registration) => {
                return (
                    <div key={registration.id}>
                        <h2>{registration.cyclist.name}</h2>
                        <p>{registration.bike}</p>
                    </div>
                )
                    

            })}
        </>
    )

}



export default RaceInfo