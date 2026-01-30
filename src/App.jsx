import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="add" element={<AddCreator />} />
        <Route path="edit" element={<EditCreator />} />
        <Route path="view" element={<ViewCreator />} />
      </Routes>
  );
}

export default App;