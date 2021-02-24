import { gql } from '@apollo/client'

export const OFFICIAL_WORKOUTS_QUERY = gql`
  query officialWorkouts {
    officialWorkouts {
      id
      createdAt
      name
      summary
      description
      demoVideoUrl
      demoVideoThumbUrl
      youtubeVideoUrl
      spotifyAudio
      imageUrl
      scope
      timecap
      difficultyLevel
      scope
    }
  }
`
