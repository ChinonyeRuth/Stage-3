import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../../firebase'

function LoginForm() {
  const auth = getAuth(firebaseApp)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      // You can access the user data here if the login is successful
      const user = userCredential.user
      console.log('User logged in:', user)

      // Redirect to the ImageGallery component upon successful login
    } catch (error) {
      // Handle login errors here
      setError(error.message)
    }

    // Reset the form after submission
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
