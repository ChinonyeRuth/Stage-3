// firebase.js
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA47mbO7jetaaQ9CqEM9dd-HK7I2ar4H9w',
  authDomain: 'stage3-ddefa.firebaseapp.com',
  projectId: 'stage3-ddefa',
  storageBucket: 'stage3-ddefa.appspot.com',
  messagingSenderId: '266883510281',
  appId: '1:266883510281:web:c725183abe9377999f48d8',
  measurementId: 'G-2W6LMMTH7S',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
