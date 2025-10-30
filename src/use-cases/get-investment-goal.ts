import { InvestimentGoalsRepository } from '@/repositories/investment-goals-repository'
import { InvestmentGoalNotFoundError } from './errors/investment-goal-not-found-error'

export class GetInvestmentGoalUseCase {
  constructor(private investmentGoalsRepository: InvestimentGoalsRepository) {}

  async execute(id: string) {
    const goal = await this.investmentGoalsRepository.getById(id)

    if (!goal) {
      throw new InvestmentGoalNotFoundError()
    }

    return goal
  }
}
