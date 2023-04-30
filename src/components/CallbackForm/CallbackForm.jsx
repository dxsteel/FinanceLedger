import React from 'react';
import './CallbackForm.scss';
import { Formik } from 'formik';

export const CallbackForm = () => (
  <div className='section-form'>
    <h2 className='section-form__title'>Request Callback</h2>
    <Formik
      initialValues={{ email: '', name: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'This is a required field';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
             <input className='section-form__name'
            type="name"
            name="name"
            placeholder='Enter your name'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input className='section-form__mail'
            type="email"
            name="email"
            placeholder='Enter email*'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <button className='section-form__button' type="submit" disabled={isSubmitting}>
            Send
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CallbackForm;