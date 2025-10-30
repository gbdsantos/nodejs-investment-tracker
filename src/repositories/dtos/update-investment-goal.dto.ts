import { Months } from '@/@types/months'

export interface UpdateInvestmentGoalDto {
  name?: string
  total_amount?: number
  monthly_amount?: number
  months?: Months[]
}
