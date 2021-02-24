import { useMemo } from 'react'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import nookies from 'nookies'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'
import { signOut } from './firebaseClient'
import { showToast } from '../components/notifications'

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions: { code } }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )

      // https://www.apollographql.com/docs/link/links/error/#error-categorization
      if (code === 'UNAUTHENTICATED') {
        console.log(
          'Request not authenticated - force sign out to refresh token state',
        )
        signOut()
        showToast('Access not granted, try signing in again', 'Error', 5000)
      }
    })
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: nookies.get().token,
      'user-type': 'ADMIN',
    },
  }
})

// 'https://spotme-api-sandbox.herokuapp.com/'
// 'http://localhost:4000/'
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
})

export function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === 'undefined', // set to true for SSR
    ssrMode: false,
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps = {}) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
