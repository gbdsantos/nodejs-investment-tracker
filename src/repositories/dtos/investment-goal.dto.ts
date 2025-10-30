import { Months } from '@/@types/months'

export interface InvestmentGoalDto {
  id: string
  name: string
  monthly_amount: number
  months: Months[]
  total_amount: number
  created_at: Date
  updated_at: Date
}
