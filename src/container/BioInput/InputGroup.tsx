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

type stateCountry = {
  name: string
  state: string[]
}

const stateOfCountry: stateCountry[] = [{ name:'australia', state: ['NSW', 'QLD', 'VIC'] }, { name:'america', state: ['NY', 'NJ', 'CA']}]
let stateOptions: object[] = []

const options: object[] = [];
const techStack = ["Java", "C", "C++", "Python", "PHP", "Object-C", "SQL"];
for (let i=0; i<techStack.length; i++) {
  options.push(<option key={i} value={techStack[i]}>{techStack[i]}</option>)
}

const InputGroup = () => {

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik<Information>({
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
          value={values.techStack}
          onChange={handleChange}
        >
          {options}
        </select>
      </div>
      <label htmlFor="country">Country</label>
      <select
        name="country"
        placeholder="Please select"
        onChange={event => {
          setFieldValue("country", event.target.value)
          stateOptions = [];
          stateOfCountry.map(item => {
            if (event.target.value === item.name) {
              item.state.map((state, index) => stateOptions.push(<option key={index} value={state}>{state}</option>)
              )
            }
          })
        }}
        value={values.country}
      >
        <option value="australia">Australia</option>
        <option value="america">America</option>
      </select>
      <label htmlFor="state">State</label>
      <select
        name="state"
        value={values.state}
        onChange={handleChange}
      >
        {stateOptions}
      </select>
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