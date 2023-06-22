import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../components/Login';
import Weather from '../components/Weather';

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default MyRouter;
