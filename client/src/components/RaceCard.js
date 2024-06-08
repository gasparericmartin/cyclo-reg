

function RaceCard({race}) {
    const {id, name, date, location, 
            length, registration_fee} = race 
        
        
    return (
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{location}</p>
            <p>{length} KMs</p>
            <p>{registration_fee}</p>
        </>
    )
}

export default RaceCard