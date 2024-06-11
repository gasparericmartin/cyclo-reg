import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

function RegistrationForm({races, cyclist, regList, setRegList}) {

    function handleSubmit(values) {
        const postObj = {
            id: '',
            bike: values.bike,
            cyclist_id: cyclist.id,
            race_id: parseInt(values.race)
        }
        fetch('http://localhost:5555/registrations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postObj)
        })
        .then(r => {
            if(r.ok) {
               r.json().then((newReg) => setRegList([...regList, newReg]))
            }
        })

    }

    const options = races.map((race) => {
        return (
            <option key={race.id} value={race.id}>
                {race.name}: {race.date}
            </option>
        )
    })


    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
                bike: '',
                race: ''
            }}
            validationSchema={Yup.object().shape({
                bike: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                race: Yup.number()
                    .required('Pick a race')
                    .positive('Pick a race')
            })}
            onSubmit={(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            {({errors}) => (
                <Form>
                    <label htmlFor='bike'>Bike</label>
                    <Field name='bike' type='text' />
                    {errors.bike ? <p>{errors.bike}</p>: null}

                    <label htmlFor='race'>Race</label>
                    <Field 
                        name='race' 
                        as='select' 
                        placeholder='Race'>
                        <option defaultValue value={-1}>Select Race</option>
                        {options}
                    </Field>
                    {errors.race ? <p>{errors.race}</p> : null}
                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>
    )

}

export default RegistrationForm