import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  getIdToken as fbGetIdToken,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

// Client side sign in
const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    throw err
  }
}

// Client side sign out
const signOut = async () => {
  try {
    await fbSignOut(auth)
  } catch (err) {
    console.error(err)
    throw err
  }
}

const getIdToken = async () => {
  try {
    if (auth.currentUser) {
      return await fbGetIdToken(auth.currentUser)
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { firebaseApp, auth, signIn, signOut, getIdToken }
