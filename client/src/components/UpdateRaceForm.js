import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

function UpdateRaceForm({race, patchRace}) {

    function handleSubmit(values) {

        const postDate = values.date.split('-').map((element) => parseInt(element))
        const fields = ['name', 'date', 'location', 'length', 'registration_fee']
        const postObj = {id: race.id}

        for (let index in fields) {
            const field = fields[index]
            if (values[field] !== ''){
                if (field !== 'date'){
                    postObj[field] = values[field]
                }
                else{
                    postObj[field] = postDate
                }

            }
        }

       patchRace(postObj, race)
    }

    function validateName(value) {
        let error
        const valueCase = value.toLowerCase()
        if(!value) {
            error = 'Required'
        }
        else if(
            !valueCase.includes('race')
        ) {
            return 'Must include the word "race"'
        }
    }

    function validateLocation(value) {
        let error
        const re = /[A-z0-9 ]*[,][ ][A-Z]{2}/

        if(!value) {
            error = 'Required'
        }
        else if(!re.exec(value)) {
           return 'Location format is "city, state abbr." for example "Troy, NY"'
        }
    }

    return(

        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
                name: '',
                date: '',
                location: '',
                length: '',
                registration_fee: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .max(30, 'Must be 30 characters or less'),
                date: Yup.date(),
                location: Yup.string()
                    .max(30, 'Must be 30 characters or less'),
                length: Yup.number()
                    .min(1, 'Must be at least 1 mile')
                    .max(1000, 'Cannot be more than 1000 miles'),
                registration_fee: Yup.number()
                    .max(100, 'Events should not be more than $100')
            })}
            onSubmit={(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            {({errors}) => (
            <Form>
                <label htmlFor='name'>Name</label>
                <Field name='name' type='text' validate={validateName}/>
                {errors.name ? <p>{errors.name}</p>: null}

                <label htmlFor='date'>Date</label>
                <Field name='date' type='date' />
                {errors.date ? <p>{errors.date}</p>: null}

                <label htmlFor='location'>Location</label>
                <Field name='location' type='text' validate={validateLocation}/>
                {errors.location ? <p>{errors.location}</p>: null}

                <label htmlFor='length'>Length</label>
                <Field name='length' type='number' />
                {errors.length ? <p>{errors.length}</p>: null}

                <label htmlFor='registration_fee'>Registration Fee</label>
                <Field name='registration_fee' type='number' />
                {errors.registration_fee ? <p>{errors.registration_fee}</p> : null}
                
                <button type='submit'>Submit</button>
            </Form>

            )}
        </Formik>
    )
}

export default UpdateRaceForm