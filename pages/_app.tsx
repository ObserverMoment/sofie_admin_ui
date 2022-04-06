import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import Head from 'next/head'
import { LogoMenuAndSideNav } from '../components/layout/sideNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { createApolloClient } from '../services/apolloClient'
import { auth, signOut } from '../services/firebaseClient'
import LoginModal from '../components/layout/loginModal'
import { ConfirmationDialogProvider } from '../services/dialogHookProvider'
import { LoadingDots } from '../components/loadingIndicators'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { FlexBox, MainContent, PageContainer } from '../styles/layout'

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

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <LoadingDots />
  }

  if (error) {
    signOut()
  }

  return (
    <ThemeProvider theme={theme}>
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
              <LoadingDots size={40} />
            )}

            <LoginModal isOpen={!user} />
          </PageContainer>
        </ConfirmationDialogProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}
