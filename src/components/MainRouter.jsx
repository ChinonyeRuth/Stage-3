// MainRouter.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm' // Import your LoginForm component
import ImageGallery from './ImageGallery' // Import your ImageGallery component

function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/ImageGallery" element={<ImageGallery />} />{' '}
      {/* Define the route here */}
      {/* Other routes can be defined here */}
    </Routes>
  )
}

export default MainRouter
