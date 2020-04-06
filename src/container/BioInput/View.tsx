import React from 'react';
import { useFormik } from 'formik';
import { Button } from "antd";
type Name = {
  firstName: string
  lastName: string
  gender: string
}

const BioInput = () => {

  const { values, handleChange, handleSubmit } = useFormik<Name>({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
    },
    onSubmit: values => {
      console.log(values)
      //alert("User Name: " + values.firstName + " " + values.lastName);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        value={values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        value={values.lastName}
      />
      <label htmlFor="lastName">Gender</label>
      <label>Male
        <input
          name="gender"
          type="radio"
          onChange={handleChange}
          value="male"
        />
      </label>
      <label>Female
        <input
          name="gender"
          type="radio"
          onChange={handleChange}
          value="female"
        />
      </label>
      <Button
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </form>
  )
};

export default BioInput