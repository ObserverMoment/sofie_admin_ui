export interface WorkoutType {
  id: string
  name: string
  subtitle: string
  description: string
  placeholderImageUrl: string
  scoreType: 'AMREPS' | 'FORTIME' | 'FORLOAD'
  workouts: Workout[]
}

export interface Workout {
  id: string
  createdAt: Date
  name: string
  summary: string
  description: string
  timecap: number
  demoVideoUrl: string
  demoVideoThumbUrl: string
  youtubeVideoUrl: string
  spotifyAudio: string
  imageUrl: string
  workoutType: WorkoutType
  difficultyLevel: number
  scope: 'OFFICIAL' | 'PUBLIC' | 'PRIVATE'
}
