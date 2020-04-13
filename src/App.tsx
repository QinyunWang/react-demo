import React from 'react';
import './App.less';
import { Layout } from 'antd';
import BioInput from './container/BioInput/InputGroup'


const { Header, Footer, Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Layout>
        <Header className='header'>
          Qinyun Wang
        </Header>
        <Content>
          <div id="container">
            <BioInput />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  )
}

export default App;
