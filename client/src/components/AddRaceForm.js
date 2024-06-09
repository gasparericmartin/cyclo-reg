import {useState} from 'react'

function AddRaceForm({postRace}) {


    const [formData, setFormData] = useState({
                                        name: '',
                                        date: '',
                                        location: '',
                                        length: '',
                                        registration_fee: ''
                                        })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        const postDate = formData.date.split('-').map((element) => parseInt(element))

        const postObj = {
                        id: '',
                        name: formData.name,
                        date: postDate,
                        location: formData.location,
                        length: formData.length,
                        registration_fee: formData.registration_fee
        }

        postRace(postObj)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Name'
                    value={formData.name}
                    name='name'
                    onChange={handleChange}
                />

                <input 
                    type='date'
                    placeholder='Date'
                    value={formData.date}
                    name='date'
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    placeholder='Location'
                    value={formData.location}
                    name='location'
                    onChange={handleChange}
                />

                <input 
                    type='number'
                    placeholder='Length'
                    value={formData.length}
                    name='length'
                    onChange={handleChange}
                />

                <input 
                    type='number'
                    placeholder='Registration Fee'
                    value={formData.registration_fee}
                    name='registration_fee'
                    onChange={handleChange}
                />

                <input type='submit' />
            </form>
        </>
    )
}

export default AddRaceForm