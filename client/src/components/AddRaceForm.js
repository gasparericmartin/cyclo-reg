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

        const postObj = {
                        id: '',
                        name: formData.name,
                        date: formData.date,
                        location: formData.location,
                        length: formData.length,
                        registration_fee: formData.registration_fee
        }

        postRace(postObj)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                    type='text'
                    placeholder='Name'
                    value={formData.name}
                    name='name'
                    onChange={handleChange}
                />

                <Input 
                    type='date'
                    placeholder='Date'
                    value={formData.date}
                    name='date'
                    onChange={handleChange}
                />

                <Input 
                    type='text'
                    placeholder='Location'
                    value={formData.location}
                    name='location'
                    onChange={handleChange}
                />

                <Input 
                    type='number'
                    placeholder='Length'
                    value={formData.length}
                    name='length'
                    onChange={handleChange}
                />

                <Input 
                    type='number'
                    placeholder='Registration Fee'
                    value={formData.registration_fee}
                    name='registration_fee'
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export default AddRaceForm