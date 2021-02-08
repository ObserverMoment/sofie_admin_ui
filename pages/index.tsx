import styled from 'styled-components'
import { GetStaticProps } from 'next'

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spotme-api-staging.herokuapp.com/',
  cache: new InMemoryCache()
});

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home({ strings }) {
  return <Title>My page: {strings[0]}, {strings[1]}</Title>
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    strings: ['hi', 'hello']
  }
})
