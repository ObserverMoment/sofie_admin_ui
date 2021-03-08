type WorkoutMoveRepType = 'REPS' | 'CALORIES' | 'DISTANCE' | 'TIME'

export interface WorkoutSectionType {
  id: string
  name: string
  subtitle: string
  description: string
  imageUri: string
  validRepTypes: WorkoutMoveRepType[]
}

export interface Workout {
  id: string
  createdAt: Date
  archived: boolean
  name: string
  summary: string
  description: string
  timecap: number
  introVideoUri: string
  introVideoThumbUrl: string
  introAudioUrl: string
  coverImageUri: string
  difficultyLevel: number
  contentAccessScope: 'OFFICIAL' | 'PUBLIC' | 'PRIVATE'
}
