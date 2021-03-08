import { gql } from '@apollo/client'

import { Equipment } from '../types/models/equipment'
import { BodyAreaMoveScore, MoveInput, Move } from '../types/models/move'

const moveFields = `
  id
  name
  description
  searchTerms
  MoveType {
    id
    name
    description
    imageUri
  }
  validRepTypes
  demoVideoUri
  RequiredEquipments {
    id
    name
  }
  SelectableEquipments {
    id
    name
  }
  BodyAreaMoveScores {
    BodyArea {
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
  name: move.name,
  searchTerms: move.searchTerms || null,
  description: move.description || null,
  demoVideoUri: move.demoVideoUri || null,
  scope: 'STANDARD',
  validRepTypes: move.validRepTypes.includes('TIME')
    ? move.validRepTypes
    : ['TIME', ...move.validRepTypes], // TIME is always required, the API will throw an error if not present.
  RequiredEquipments: move.RequiredEquipments.map((e: Equipment) => e.id),
  SelectableEquipments: move.SelectableEquipments.map((e: Equipment) => e.id),
  MoveType: move.MoveType.id,
  BodyAreaMoveScores: move.BodyAreaMoveScores.map((bam: BodyAreaMoveScore) => ({
    BodyArea: bam.BodyArea.id,
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
      imageUri
    }
  }
`

export const BODY_AREAS_QUERY = gql`
  query bodyAreas {
    bodyAreas {
      id
      name
      frontBack
      upperLower
    }
  }
`
