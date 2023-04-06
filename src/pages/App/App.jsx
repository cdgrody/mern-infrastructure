import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import Calendar from '../Calendar/Calendar'

export default function App() {

  return (
    <main className="App">
      {
        <>
          <Routes>
            <Route path="/" element={<Calendar />} />
          </Routes>
        </>
      }
    </main>
  );
}


