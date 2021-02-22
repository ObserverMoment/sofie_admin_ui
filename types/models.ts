export interface Equipment {
  id: string
  name: string
  altNames: string
  loadAdjustable: boolean
}

export interface CreateEquipment {
  name: string
  altNames: string
  loadAdjustable: boolean
}

export interface UpdateEquipment {
  id: string
  name?: string
  altNames?: string
  loadAdjustable?: boolean
}

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

export interface MoveType {
  id: string
  name: string
  description: string
  imageUrl: string
}

export interface BodyAreaMoveScore {
  id: string
  bodyArea: BodyArea
  score: number
}

export interface BodyArea {
  id: string
  name: string
}
