import firebaseClient from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const initializeFirebase = () => {
  if (!firebaseClient.apps.length) {
    firebaseClient.initializeApp(firebaseConfig)
  }
  return firebaseClient.auth()
}

// Client side sign in
const signIn = async (email: string, password: string) => {
  try {
    await firebaseClient.auth().signInWithEmailAndPassword(email, password)
  } catch (err) {
    console.error(err)
    throw err
  }
}

// Client side sign out
const signOut = async () => {
  try {
    await firebaseClient.auth().signOut()
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { signIn, signOut, initializeFirebase }
