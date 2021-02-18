import { gql } from '@apollo/client'

const moveFields = `
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
`

export const STANDARD_MOVES_QUERY = gql`
  query standardMoves {
    standardMoves {
      ${moveFields}
    }
  }
`

export const CREATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation createOfficialMove($data: CreateMoveInput!) {
    updateOfficialMove(data: $data) {
      ${moveFields}
    }
  }
`

export const UPDATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation updateOfficialMove($data: DeepUpdateMoveInput!) {
    createOfficialMove(data: $data) {
      ${moveFields}
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
