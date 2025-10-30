import { Months } from '@/@types/months'

export interface CreateInvestmentGoalDto {
  name: string
  monthly_amount: number
  months: Months[]
  total_amount: number
}
