import React from 'react'
import { Modal, Button, Form, Input, DatePicker } from 'antd'
import { useState } from 'react'
import { FormInstance } from 'antd/lib/form';
import { TodoDetailsPayload } from '../types/application';
import { post } from '../fetch';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const buildPayload = (form: FormInstance) => {
  const toDoDetails: TodoDetailsPayload = {
    title: String(form.getFieldValue("title")),
    time: new Date(form.getFieldValue("time")),
    description: String(form.getFieldValue("description"))
  }

  return toDoDetails
}

const AddToDoItem = () => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)

  const handleClose = () => {
    setVisible(false)
    form.resetFields()
  }

  const handleSubmit = () => {
    post(buildPayload(form))
    setVisible(false)
    form.resetFields()
  }

  return (
    <div style={{margin: 20, display: 'flex', justifyContent: 'center'}}>
        <Button type="primary" size={"large"} onClick={() => setVisible(true)}>
          Add Item
        </Button>
        <Modal
          title="Add new event"
          visible={visible}
          onCancel={handleClose}
          onOk={handleSubmit}
        >
          <Form
            {...layout}
            form={form}
            onFinish={e => console.log(e.target)}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input the event title.' }]}
              style={{width: '80%'}}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Time"
              name="time"
              rules={[{required: true, message: 'Please select a time.'}]}
              style={{width: '80%'}}
            >
              <DatePicker 
                showToday
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              style={{width: '80%'}}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
  )
}

export default AddToDoItem