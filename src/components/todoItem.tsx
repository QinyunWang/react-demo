import React from 'react'
import { Card, Button } from 'antd'
import { CalendarTwoTone, MessageTwoTone } from '@ant-design/icons'
import moment from 'moment'
import { TodoDetails } from '../types/application'
import { deleteItemById } from '../fetch'

type Props = {
  todoDetails: TodoDetails
}

const TodoItem = ({ todoDetails: item }: Props) => {

  return (
    <Card 
      title={item.title} 
      style={{ width: 300, margin: 15 }}
      actions={[<Button danger onClick={() => deleteItemById(item.id)}>Completed</Button>]}
    >
      <p><CalendarTwoTone twoToneColor="#52c41a" style={{marginRight: 10}}/>{moment(item.time).format('DD MMM YYYY')}</p>
      <p><MessageTwoTone style={{marginRight: 10}}/>{item.description}</p>
    </Card>
  )
}

export default TodoItem