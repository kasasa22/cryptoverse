import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Layout, Typography} from 'antd';
import { Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies, News } from './components';
import './app.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/crypto/:coinid' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer' level={5} >
        <Typography.Title style={{ color:'white' , textAlign:'center'}}>
          Cryptoverse <br/>
          all rights reserved
        </Typography.Title>
      </div>
    </div>
  );
};

export default App;
