import firebaseClient from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'
import nookies from 'nookies'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig)
}

const TOKEN_KEY = 'spotmeToken'

async function signIn(email: string, password: string, redirect?: string) {
  try {
    const res = await firebaseClient
      .auth()
      .signInWithEmailAndPassword(email, password)
    const token = await res.user.getIdToken()
    nookies.set(null, TOKEN_KEY, token, {})
    Router.push(redirect || '/')
  } catch (err) {
    throw err
  }
}

async function signOut() {
  try {
    await firebaseClient.auth().signOut()
    nookies.destroy(null, TOKEN_KEY)
    Router.push('/login')
  } catch (err) {
    throw err
  }
}

export { firebaseClient, signIn, signOut }
