import { Months } from '@/@types/months'
import { CreateInvestmentGoalDto } from './dtos/create-investment-goal.dto'
import { InvestmentGoalDto } from './dtos/investment-goal.dto'
import { UpdateInvestmentGoalDto } from './dtos/update-investment-goal.dto'

export interface InvestimentGoalsRepository {
  create(data: CreateInvestmentGoalDto): Promise<InvestmentGoalDto>
  delete(id: string): Promise<void>
  getById(id: string): Promise<InvestmentGoalDto | null>
  list(filters: { name?: string; months?: Months[] }): Promise<InvestmentGoalDto[] | null>
  update(id: string, data: UpdateInvestmentGoalDto): Promise<InvestmentGoalDto>
}
