import { Equipment } from './equipment'

export interface Move {
  id: string
  name: string
  description: string
  searchTerms: string
  moveType: MoveType
  scope: 'STANDARD' | 'CUSTOM'
  validRepTypes: Array<string>
  demoVideoUrl: string
  requiredEquipments: Array<Equipment>
  selectableEquipments: Array<Equipment>
  bodyAreaMoveScores: Array<BodyAreaMoveScore>
}

export interface MoveInput {
  name: string
  description?: string
  searchTerms?: string
  moveType: string // MoveType Id
  scope: 'STANDARD' | 'CUSTOM'
  validRepTypes: string[]
  demoVideoUrl?: string
  requiredEquipments?: string[] // Equipment Ids
  selectableEquipments?: string[] // Equipment Ids
  bodyAreaMoveScores?: Array<CreateBodyAreaMoveScoreInput>
}

export interface MoveType {
  id: string
  name: string
  description: string
  imageUrl: string
}

export interface BodyAreaMoveScore {
  bodyArea: BodyArea
  score: number
}

export interface CreateBodyAreaMoveScoreInput {
  bodyArea: string // BodyArea Id
  score: number
}

export interface BodyArea {
  id: string
  name: string
  frontBack: 'FRONT' | 'BACK'
  upperLower: 'UPPER' | 'LOWER'
}
