import React, { useState } from 'react';
import './App.less';
import { Layout } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons'
import TodoItem from './components/todoItem'
import { TodoDetails } from './types/application'
import AddToDoItem from './components/addModal'
import { get } from './fetch'
import { ContainerStyle } from './components/style'


const { Header, Footer, Content } = Layout;

function App() {

  const [items, setItems] = useState([])

  const getItems = async () => {
    return await get()
      .then(res => res.json()).then(data => setItems(data))
  }

  getItems()

  return (
    
    <div className="App">
      <Layout>
        <Header className="header">
          <UnorderedListOutlined />
          &nbsp;To-Do List
        </Header>
        <Content>
          <ContainerStyle>
            <AddToDoItem />
            <div id="items">
              {items.map((item: TodoDetails) => <TodoItem todoDetails={item} key={item.id} />)}
            </div>
          </ContainerStyle>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  )
}

export default App;
