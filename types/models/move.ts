import { Equipment } from './equipment'

export interface Move {
  id: string
  name: string
  archived: boolean
  description: string
  searchTerms: string
  MoveType: MoveType
  scope: 'STANDARD' | 'CUSTOM'
  validRepTypes: Array<string>
  demoVideoUri: string
  RequiredEquipments: Array<Equipment>
  SelectableEquipments: Array<Equipment>
  BodyAreaMoveScores: Array<BodyAreaMoveScore>
}

export interface MoveInput {
  name: string
  description?: string
  searchTerms?: string
  MoveType: string // MoveType Id
  scope: 'STANDARD' | 'CUSTOM'
  validRepTypes: string[]
  demoVideoUri?: string
  RequiredEquipments?: string[] // Equipment Ids
  SelectableEquipments?: string[] // Equipment Ids
  BodyAreaMoveScores?: Array<CreateBodyAreaMoveScoreInput>
}

export interface MoveType {
  id: string
  name: string
  description: string
  imageUri: string
}

export interface BodyAreaMoveScore {
  BodyArea: BodyArea
  score: number
}

export interface CreateBodyAreaMoveScoreInput {
  BodyArea: string // BodyArea Id
  score: number
}

export interface BodyArea {
  id: string
  name: string
  frontBack: 'FRONT' | 'BACK'
  upperLower: 'UPPER' | 'LOWER'
}
