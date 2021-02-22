import { gql } from '@apollo/client'
import { Move } from '../types/models'

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

export const genCreateMoveJson = (move: Move) => ({
  ...move,
  validRepTypes: ['TIME', ...move.validRepTypes], // TIME is always required, the API will throw an error if not present.
  requiredEquipments: move.requiredEquipments.map((m) => m.id),
  selectableEquipments: move.selectableEquipments.map((m) => m.id),
  moveType: move.moveType.id,
})

export const CREATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation createMove($data: CreateMoveInput!) {
    createMove(data: $data) {
      ${moveFields}
    }
  }
`

export const UPDATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation updateMove($data: DeepUpdateMoveInput!) {
    updateMove(data: $data) {
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
