import React from 'react';
import {Formik} from 'formik';
import { Button, Radio, Select, Typography } from "antd";
import {Form, Input } from "formik-antd";

const BioInput = () => {

  const { Title } = Typography;
  const { Option } = Select;

  const options: object[] = [];
  const techStack = ["Java", "C", "C++", "Python", "PHP", "Object-C", "SQL"];
  for (let i=0; i<techStack.length; i++) {
    options.push(<Option key={i} value={techStack[i]}>{techStack[i]}</Option>)
  }

  return (
    <Formik
      initialValues={{firstName: '', lastName: '', gender: '', occupation: '', techStack: ''}}
      onSubmit={values => console.log(values)}
      render={({values, handleChange, setFieldValue}) => (
        <Form>
          <Title level={4}>First Name</Title>
          <Input
            style={{ width: '40%',}}
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
          <Title level={4}>Last Name</Title>
          <Input
            style={{ width: '40%',}}
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
          <Title level={4}>Gender</Title>
          <Radio.Group
            name="gender"
            onChange={handleChange}
            value={values.gender}
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
          <Title level={4}>Occupation</Title>
          <Select
            placeholder="Please select"
            onChange={value => setFieldValue("occupation", value)}
          >
            <Option value="student">Student</Option>
            <Option value="programmer">Programmer</Option>
            <Option value="other">Other</Option>
          </Select>
          <Title level={4}>Tech Stack</Title>
          <Select
            mode="multiple"
            style={{ width: '400px'}}
            placeholder="Please select"
            onChange={value => setFieldValue("techStack", value)}
          >
            {options}
          </Select>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    />
  )
};

export default BioInput