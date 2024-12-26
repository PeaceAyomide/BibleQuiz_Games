import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnterPage from './EnterPage'
import GamePage from './GamePage'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<EnterPage />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
</BrowserRouter>
  )
}

export default App