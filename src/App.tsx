import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, ExpiredPage, SuccessPage, DownloadLink } from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/:id' element={<DownloadLink />} />
      <Route path='/expired' element={<ExpiredPage />} />
      <Route path='/success' element={<SuccessPage />} />
    </Routes>
  );
};

export default App;
