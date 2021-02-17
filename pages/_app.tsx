import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import {
  FlexBox,
  MainContent,
  PageContainer,
  theme,
} from '../components/styled-components/styled'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { LogoMenuAndSideNav } from '../components/layout/sideNav'
import { TopNav } from '../components/layout/topNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { createApolloClient, useApollo } from '../lib/apolloClient'
import { initializeFirebase } from '../lib/firebaseClient'
import Login from '../components/layout/loginForm'
import nookies from 'nookies'
import LoginModal from '../components/layout/loginModal'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${theme.colors.primaryLight}
  }
`

const firebaseAuth = initializeFirebase()

export default function App({ Component, pageProps }) {
  const apolloClient = createApolloClient()
  const [authed, setAuthed] = useState<boolean>(false)

  useEffect(() => {
    if (nookies.get().token) {
      setAuthed(true)
    }
    const unsubscribe = firebaseAuth.onIdTokenChanged(async (user) => {
      nookies.destroy(null, 'token')
      if (!user) {
        setAuthed(false)
      } else {
        const newToken = await user.getIdToken()
        nookies.set(null, 'token', newToken)
        setAuthed(true)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SpotMe Fitness Admin Dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <PageContainer>
          <LogoMenuAndSideNav />
          <FlexBox align="center">
            <TopNav />
            <MainContent>{authed && <Component {...pageProps} />}</MainContent>
            <ToastContainer style={{ width: '360px' }} />
          </FlexBox>
          <LoginModal isOpen={!authed}>
            <Login />
          </LoginModal>
        </PageContainer>
      </ApolloProvider>
    </ThemeProvider>
  )
}
