

function RaceCard({race, handleRegClick, handleDeleteRace}) {
    const {id, name, date, location, 
            length, registration_fee, registrations} = race 
        
    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => handleRegClick(race)}>Details</button>
            <p>{date}</p>
            <p>{location}</p>
            <p>{length} KMs</p>
            <p>{registration_fee}</p>
            <button>Update Race</button>
            <button onClick={() => handleDeleteRace(race)}>Delete Race</button>
        </>
    )
}

export default RaceCard