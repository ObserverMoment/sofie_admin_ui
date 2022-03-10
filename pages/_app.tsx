import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import {
  FlexBox,
  MainContent,
  PageContainer,
  theme,
} from '../components/styled-components/styled'
import React from 'react'
import Head from 'next/head'
import { LogoMenuAndSideNav } from '../components/layout/sideNav'
import { TopNav } from '../components/layout/topNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { createApolloClient } from '../lib/apolloClient'
import { auth, signOut } from '../lib/firebaseClient'
import LoginModal from '../components/layout/loginModal'
import { ConfirmationDialogProvider } from '../lib/dialogHookProvider'
import { LoadingDots, LoadingSpinner } from '../components/loadingIndicators'
import { useAuthState } from 'react-firebase-hooks/auth'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${theme.colors.primaryLight}
  }
  * {
    font-family: 'Nunito Sans', sans-serif;
  }
  // Uploadcare file uploader widget styling.
  .uploadcare--button_primary, .uploadcare--widget__button_type_open { 
    background-color: ${theme.colors.primaryDark};
    border-color: ${theme.colors.primaryDark};
    :focus {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
    :hover {
      cursor: pointer;
      background-color: ${theme.colors.pureBlack};
    }}
`

// initializeFirebase returns ref to firebase.auth()
const apolloClient = createApolloClient()

type AuthState = 'loading' | 'authed' | 'unauthed'
type CacheState = 'shouldClear' | 'authed' | 'unauthed'

export default function App({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    signOut()
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sofie Admin</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ConfirmationDialogProvider>
          <PageContainer>
            <LogoMenuAndSideNav />
            {user ? (
              <FlexBox align="center">
                <MainContent>
                  <Component {...pageProps} />
                </MainContent>
                <ToastContainer style={{ width: '360px' }} />
              </FlexBox>
            ) : (
              <LoadingDots width={40} />
            )}

            <LoginModal isOpen={!user} />
          </PageContainer>
        </ConfirmationDialogProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}
