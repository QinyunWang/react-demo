import React from 'react';
import './App.less';
import { Layout } from 'antd';
import View from './container/BioInput/index'


const { Header, Footer, Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Layout>
        <Header className='header'>
          Qinyun Wang
        </Header>
        <Content>
          <View />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  )
}

export default App;
