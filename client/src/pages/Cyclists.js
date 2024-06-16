import {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import CyclistCard from '../components/CyclistCard'


function Cyclists() {
    const [cyclists, setCyclists] = useState([])
    const {races} = useOutletContext()
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5555/cyclists')
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => setCyclists(data))   
                setError(false)
            }
            else {
                r.json()
                .then((errorObj) => setError(errorObj.error))
            }
        })
        
    
    
    }, [])

    if (error) return <h2>Cyclists Error: {error}</h2>

    return (
        <>
            <h1 id='cychead'>Cyclists</h1>
            <div className='cyclist-container'>
            
            {cyclists.map((cyclist) => {
                return <CyclistCard 
                            key={cyclist.id} 
                            cyclist={cyclist}
                            races={races} />
            })}

            </div>
        </>
        
    )
}

export default Cyclists