import { gql } from '@apollo/client'

export const OFFICIAL_WORKOUTS_QUERY = gql`
  query officialWorkouts {
    officialWorkouts {
      id
      createdAt
      name
      summary
      description
      introVideoUri
      introVideoThumbUri
      introAudioUri
      coverImageUri
      contentAccessScope
      difficultyLevel
    }
  }
`
