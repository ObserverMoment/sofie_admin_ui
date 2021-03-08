export interface WorkoutProgram {
  id: string
  createdAt: Date
  archived: boolean
  name: string
  description: string
  coverImageUri: string
  introVideoUri: string
  introVideoThumbUri: string
  introAudioUri: string
  contentAccessScope: 'OFFICIAL' | 'PUBLIC' | 'PRIVATE'
}
