import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css' // Import Tailwind CSS

const root = createRoot(document.getElementById('root'))

root.render(<App />)
