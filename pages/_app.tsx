import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import {
  FlexBox,
  MainContent,
  theme,
} from '../components/styled-components/styled'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { LogoMenuAndSideNav } from '../components/layout/sideNav'
import { TopNav } from '../components/layout/topNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { firebaseClient } from '../lib/firebaseClient'
import Router from 'next/router'
import nookies from 'nookies'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${theme.colors.primaryLight}
  }
`

const Private = ({ children }) => {
  const { spotmeToken } = nookies.get()

  useEffect(() => {
    if (!spotmeToken && Router.route != '/login') {
      Router.push(`/login?from=${Router.route}`)
    }
  }, [])

  return children
}

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

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
        <FlexBox direction="row">
          <LogoMenuAndSideNav />
          <FlexBox align="center">
            <TopNav />
            <MainContent>
              <Private>
                <Component {...pageProps} />
              </Private>
            </MainContent>
            <ToastContainer style={{ width: '280px' }} />
          </FlexBox>
        </FlexBox>
      </ApolloProvider>
    </ThemeProvider>
  )
}
