import {useState, useEffect} from 'react'
import RaceCard from '../components/RaceCard'
import RaceInfo from '../components/RaceInfo'
import AddRaceForm from '../components/AddRaceForm'


function Races() {
    const [races, setRaces] = useState([])
    const [showRaceDetails, setShowRaceDetails] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [raceDetails, setRaceDetails] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5555/races')
        .then(r => r.json())
        .then(data => setRaces(data))
    }, [])

    function handleRegClick(race) {
        setShowRaceDetails(!showRaceDetails)
        setRaceDetails(race)
    }

    function handleDeleteRace(race) {
        fetch(`http://localhost:5555/races/${race.id}`, {
            method: 'DELETE'
        })
        .then(r => {
            if (r.ok) {
                setRaces((races) => 
                    races.filter((stateRace) => stateRace.id !== race.id))
            }
        })
    }

    function postRace(postObj) {
        fetch('http://localhost:5555/races', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postObj)
        })
        .then(r => r.json())
        .then(data => setRaces([...races, data]))
    }

    function switchRender() {
        if (!showRaceDetails) {
            return (
                races.map((race) => {
                    return <RaceCard 
                            key={race.id} 
                            race={race} 
                            handleRegClick={handleRegClick} 
                            handleDeleteRace={handleDeleteRace}/>
                })
            )
        }
        else {
            return <RaceInfo race={raceDetails}/>
        }
    }
    
    return (
        <>
            <h1>Races</h1>
            <button onClick={() => setShowForm(!showForm)}>Create Race</button>
            {showForm ? <AddRaceForm postRace={postRace}/> : null}
            {showRaceDetails ? 
            <button onClick={() => setShowRaceDetails(!showRaceDetails)}>Show All Races</button>:
            null}
            {switchRender()}
        </>
    )
}

export default Races