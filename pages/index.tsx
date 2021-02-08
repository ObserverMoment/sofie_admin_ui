import styled from 'styled-components'
import { GetStaticProps } from 'next'

import { ApolloClient, InMemoryCache } from '@apollo/client'

import { gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://spotme-api-staging.herokuapp.com/',
  cache: new InMemoryCache(),
})

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ALL_PLAYERS_QUERY = gql`
  query publicWorkouts($authedUserId: ID!) {
    publicWorkouts(authedUserId: $authedUserId) {
      id
      name
      workoutSections {
        workoutMoves {
          reps
          move {
            name
            bodyAreaMoveScores {
              bodyArea {
                name
              }
              score
            }
          }
        }
      }
    }
  }
`

export default function Home({ strings }) {
  const { loading, error, data } = useQuery(ALL_PLAYERS_QUERY, {
    variables: { authedUserId: '933288ef-8cc8-4a2f-84c8-bf6137698ab1' },
  })
  console.log(data)

  return (
    <Title>
      My page: {strings[0]}, {strings[1]}
    </Title>
  )
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    strings: ['hi', 'hello'],
  },
})
