import { gql } from '@apollo/client'

export const BODYAREAS_QUERY = gql`
  query bodyAreas {
    bodyAreas {
      id
      name
      altNames
      frontBack
      upperLower
    }
  }
`

export const WORKOUT_GOALS_QUERY = gql`
  query workoutGoals {
    workoutGoals {
      id
      name
      description
    }
  }
`

export const WORKOUT_SECTION_TYPES_QUERY = gql`
  query workoutSectionTypes {
    workoutSectionTypes {
      id
      name
      subtitle
      description
      validRepTypes
    }
  }
`
