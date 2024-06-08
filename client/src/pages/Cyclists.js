import {useEffect, useState} from 'react'
import Cyclists from '../components/CyclistCard'


function Cyclists() {
    const [cyclists, setCyclists] = useState([])

    useEffect(() => {
        fetch('http://localhost:5555/cyclists')
        .then(r => r.json())
        .then(data => setCyclists(data))
    }, [])






    return (
        <>
        <h1>Cyclists</h1>
        {cyclists.map((cyclist) => {
            return <CyclistCard key={cyclist.id} cyclist={cyclist} />
        })}

        </>
    )
}

export default Cyclists