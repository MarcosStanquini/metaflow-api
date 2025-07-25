import { SubTask } from '@prisma/client'

export interface RawSubtaskInput {
  description: string
  goal_id: string
}

export interface SubtaskRepository {
  create(data: RawSubtaskInput): Promise<SubTask>
  findManyByGoalId(goal_id: string): Promise<SubTask[] | null>
  delete(id: string): Promise<boolean | null>
  deleteManyByGoalId(goal_id: string): Promise<boolean | null>
}
