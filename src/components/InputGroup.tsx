import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'antd';

type Name = {
    firstName: string
    lastName: string
}

const InputGroup = () => {

    const formik = useFormik<Name>({
        initialValues: {
          firstName: '',
          lastName: '',
        },
        onSubmit: values => {
          alert("User Name: " + values.firstName + " " + values.lastName);
        },
      });

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <Button 
              type="primary"
              htmlType="submit"
            >
            Submit
            </Button>
        </form>
    )
}

export default InputGroup