import React from 'react';
import './App.less';
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Layout>
        <Header className='header'>
          Qinyun Wang
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
