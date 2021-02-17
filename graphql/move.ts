import { gql } from '@apollo/client'

export const STANDARD_MOVES_QUERY = gql`
  query standardMoves {
    standardMoves {
      id
      name
      description
      searchTerms
      moveType {
        id
        name
        description
        imageUrl
      }
      validRepTypes
      demoVideoUrl
      requiredEquipments {
        id
        name
      }
      selectableEquipments {
        id
        name
      }
      bodyAreaMoveScores {
        bodyArea {
          id
          name
        }
        score
      }
    }
  }
`

export const CREATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation updateOfficialMove($data: CreateMoveInput!) {
    updateOfficialMove(data: $data) {
      id
    }
  }
`

export const UPDATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation createOfficialMove($data: DeepUpdateMoveInput!) {
    createOfficialMove(data: $data) {
      id
    }
  }
`

export const MOVE_TYPES_QUERY = gql`
  query moveTypes {
    moveTypes {
      id
      name
      description
      imageUrl
    }
  }
`
