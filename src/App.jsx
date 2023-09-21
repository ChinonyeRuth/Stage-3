import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />{' '}
        {/* Set /login as the home page */}
        <Route path="/ImageGallery" element={<ImageGallery />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
