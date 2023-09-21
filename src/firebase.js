// Import Firebase
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// Your Firebase config object (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: 'AIzaSyDu1CV342IKUeFufCUmY8DE5JSsbOkz3ho',
  authDomain: 'hng-stage-3.firebaseapp.com',
  projectId: 'hng-stage-3',
  storageBucket: 'hng-stage-3.appspot.com',
  messagingSenderId: '824860382913',
  appId: '1:824860382913:web:c1d4fc0fbe90a4bc9d2640',
  measurementId: 'G-VRDSWTK10B',
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
