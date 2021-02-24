export interface WorkoutProgram {
  id: string
  createdAt: Date
  name: string
  description: string
  imageUrl: string
  videoUrl: string
  videoThumbUrl: string
  youtubeVideoUrl: string
  scope: 'OFFICIAL' | 'PUBLIC' | 'PRIVATE'
}
