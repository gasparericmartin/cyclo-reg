import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function AddRaceForm({postRace}) {

    function handleSubmit(values) {

        const postDate = values.date.split('-').map((element) => parseInt(element))

        const postObj = {
                        id: '',
                        name: values.name,
                        date: postDate,
                        location: values.location,
                        length: values.length,
                        registration_fee: values.registration_fee
        }

        postRace(postObj)
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
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                date: Yup.date()
                    .required('Required'),
                location: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                length: Yup.number()
                    .min(1, 'Must be at least 1 mile')
                    .max(1000, 'Cannot be more than 1000 miles')
                    .required('Required'),
                registration_fee: Yup.number()
                    .max(100, 'Events should not be more than $100')
                    .required('Required')
            })}
            onSubmit={(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            <Form>
                <label htmlFor='name'>Name</label>
                <Field name='name' type='text' />
                <ErrorMessage name='name' />

                <label htmlFor='date'>Date</label>
                <Field name='date' type='date' />
                <ErrorMessage name='date' />

                <label htmlFor='location'>Location</label>
                <Field name='location' type='text' />
                <ErrorMessage name='location' />

                <label htmlFor='length'>Length</label>
                <Field name='length' type='number' />
                <ErrorMessage name='length' />

                <label htmlFor='registration_fee'>Registration Fee</label>
                <Field name='registration_fee' type='number' />
                <ErrorMessage name='registraion_fee' />

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default AddRaceForm