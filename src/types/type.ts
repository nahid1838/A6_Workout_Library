export interface ILibrary {
  id: number
  name: string
  image: string
  muscleGroups: Array<string>
  equipment: string
  difficulty: string
  duration: number
  caloriesBurned: number
  sets: number
  reps: string
  rating: number
  description: string
  instructions: Array<string>
}
