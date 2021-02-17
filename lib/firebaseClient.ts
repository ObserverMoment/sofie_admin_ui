import firebaseClient from 'firebase/app'
import 'firebase/auth'
import Router from 'next/router'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
//   firebaseClient.initializeApp(firebaseConfig)
// Create a listener to handle cookie.
// firebaseClient.auth().onIdTokenChanged(async (user) => {
//   if (!user) {
//     // nookies.destroy(null, SPOTME_TOKEN_KEY)
//     Router.push('/login')
//   }
//   // else {
//   //   const newToken = await user.getIdToken()
//   //   nookies.set(null, SPOTME_TOKEN_KEY, newToken)
//   // }
// })
// }

// const getToken = async (): Promise<string> => {
//   console.log('firebaseClient.auth()')
//   console.log(firebaseClient.auth())
//   console.log('firebaseClient.auth().currentUser')
//   console.log(firebaseClient.auth().currentUser)
//   const token = firebaseClient.auth().currentUser
//     ? await firebaseClient.auth().currentUser.getIdToken()
//     : null
//   console.log('token')
//   console.log(token)
//   return token
// }

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
