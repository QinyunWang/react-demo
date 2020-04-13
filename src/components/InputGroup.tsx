import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'antd';

type Information = {
    firstName: string
    lastName: string
    gender: string
    occupation: string
    techStack: string[]
    country: string
    state: string
}

const options: object[] = [];
const techStack = ["Java", "C", "C++", "Python", "PHP", "Object-C", "SQL"];
for (let i=0; i<techStack.length; i++) {
  options.push(<option key={i} value={techStack[i]}>{techStack[i]}</option>)
}

const InputGroup = () => {

  const { values, handleChange, handleSubmit } = useFormik<Information>({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      occupation: '',
      techStack: [],
      country: '',
      state: '',
    },
    onSubmit: values => console.log(values)
  })

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
      <label htmlFor="gender">Gender</label>
      <div>
        <label>
          <input
            id="male"
            name="gender"
            type="radio"
            onChange={handleChange}
            value="male"
          /> Male
        </label><br/>
        <label>
          <input
            id="female"
            name="gender"
            type="radio"
            onChange={handleChange}
            value="female"
          /> Female
        </label>
      </div>
      <label htmlFor="occupation">Occupation</label>
      <select
        name="occupation"
        placeholder="Please select"
        onChange={handleChange}
        value={values.occupation}
      >
        <option value="student">Student</option>
        <option value="programmer">Programmer</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="techStack">Tech Stack</label>
      <div>
        <select
          name="techStack"
          multiple={true}
          value={techStack}
          onChange={handleChange}
        >
          {options}
        </select>
      </div>
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