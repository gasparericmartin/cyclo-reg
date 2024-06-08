import {useState, useEffect} from 'react'
import RaceCard from '../components/RaceCard'


function Races() {
    const [races, setRaces] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5555/races')
        .then(r => r.json())
        .then(data => setRaces(data))
    }, [])
    
    return (
        <>
            <h1>Races</h1>
            {races.map((race) => {
                return <RaceCard key={race.id} race={race} />
            })}
        </>
    )
}

export default Races