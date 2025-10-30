import { InvestimentGoalsRepository } from '@/repositories/investment-goals-repository'
import { Months } from '@/@types/months'
import { InvestmentGoalNotFoundError } from './errors/investment-goal-not-found-error'

interface UpdateInvestmentGoalRequest {
  name?: string
  total_amount?: number
  months?: Months[]
}

export class UpdateInvestmentGoalUseCase {
  constructor(private investmentGoalsRepository: InvestimentGoalsRepository) {}

  async execute(id: string, data: UpdateInvestmentGoalRequest) {
    const existingGoal = await this.investmentGoalsRepository.getById(id)

    if (!existingGoal) {
      throw new InvestmentGoalNotFoundError()
    }

    const totalAmount = data.total_amount ?? existingGoal.total_amount
    const months = data.months ?? existingGoal.months
    const monthlyAmount = totalAmount / months.length

    const updatedGoal = await this.investmentGoalsRepository.update(id, {
      ...data,
      total_amount: totalAmount,
      monthly_amount: monthlyAmount,
    })

    return updatedGoal
  }
}
