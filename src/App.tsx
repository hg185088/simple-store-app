import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home, Jewelery, Login, MensClothing, SignUp, WomensClothing } from './pages/';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { Loading } from './components';
import { Electronics } from './pages/tabs/Electronics';

function App() {
  return (
    <PersistGate persistor={persistor} loading={<Loading />}>
      <BrowserRouter>
        <RootRoute />
      </BrowserRouter>
    </PersistGate>
  );
}

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/electronics' element={<Electronics />} />
      <Route path='/womensclothing' element={<WomensClothing />} />
      <Route path='/mensclothing' element={<MensClothing />} />
      <Route path='/jewelry' element={<Jewelery />} />
      <Route path='/auth/logIn' element={<Login />} />
      <Route path='/auth/signUp' element={<SignUp />} />
    </Routes>
  );
};

export default App;
