import {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import CyclistCard from '../components/CyclistCard'


function Cyclists() {
    const [cyclists, setCyclists] = useState([])
    const {races, setRaces} = useOutletContext()

    useEffect(() => {
        fetch('http://localhost:5555/cyclists')
        .then(r => r.json())
        .then(data => setCyclists(data))
    }, [])

    return (
        <>
        <h1>Cyclists</h1>
        {cyclists.map((cyclist) => {
            return <CyclistCard 
                        key={cyclist.id} 
                        cyclist={cyclist}
                        races={races} />
        })}

        </>
    )
}

export default Cyclists