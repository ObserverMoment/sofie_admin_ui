import { gql } from '@apollo/client'

import { Equipment } from '../types/models/equipment'
import { BodyAreaMoveScore, MoveInput, Move } from '../types/models/move'

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

// For sending to the API
// Excludes the id field - add it manually when doing a create op (vs an update op)
export const genMoveJson = (move: Move): MoveInput => ({
  ...move,
  scope: 'STANDARD',
  validRepTypes: move.validRepTypes.includes('TIME')
    ? move.validRepTypes
    : ['TIME', ...move.validRepTypes], // TIME is always required, the API will throw an error if not present.
  requiredEquipments: move.requiredEquipments.map((e: Equipment) => e.id),
  selectableEquipments: move.selectableEquipments.map((e: Equipment) => e.id),
  moveType: move.moveType.id,
  bodyAreaMoveScores: move.bodyAreaMoveScores.map((bam: BodyAreaMoveScore) => ({
    bodyArea: bam.bodyArea.id,
    score: bam.score,
  })),
})

export const CREATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation createMove($data: CreateMoveInput!) {
    createMove(data: $data) {
      ${moveFields}
    }
  }
`

export const NEW_MOVE_FRAGMENT = gql`
  fragment NewMove on Move {
    id
    type
  }
`

export const UPDATE_OFFICIAL_MOVE_MUTATION = gql`
  mutation deepUpdateMove($data: DeepUpdateMoveInput!) {
    deepUpdateMove(data: $data) {
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
