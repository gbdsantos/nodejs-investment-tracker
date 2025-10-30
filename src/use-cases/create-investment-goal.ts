import { InvestimentGoalsRepository } from '@/repositories/investment-goals-repository'
import { Months } from '@/@types/months'

interface CreateInvestmentGoalRequest {
  name: string
  total_amount: number
  months: Months[]
}

export class CreateInvestmentGoalUseCase {
  constructor(private investmentGoalsRepository: InvestimentGoalsRepository) {}

  async execute({ name, total_amount, months }: CreateInvestmentGoalRequest) {
    const monthlyAmount = total_amount / months.length

    const goal = await this.investmentGoalsRepository.create({
      name,
      total_amount,
      monthly_amount: monthlyAmount,
      months,
    })

    return goal
  }
}
