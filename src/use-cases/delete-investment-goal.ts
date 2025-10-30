import { InvestimentGoalsRepository } from '@/repositories/investment-goals-repository'
import { InvestmentGoalNotFoundError } from './errors/investment-goal-not-found-error'

export class DeleteInvestmentGoalUseCase {
  constructor(private investmentGoalsRepository: InvestimentGoalsRepository) {}

  async execute(id: string): Promise<void> {
    const existInvestmentGoal = await this.investmentGoalsRepository.getById(id)

    if (!existInvestmentGoal) {
      throw new InvestmentGoalNotFoundError()
    }

    await this.investmentGoalsRepository.delete(id)
  }
}
