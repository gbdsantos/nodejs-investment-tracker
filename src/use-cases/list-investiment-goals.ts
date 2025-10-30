import { Months } from '@/@types/months'
import { InvestimentGoalsRepository } from '@/repositories/investment-goals-repository'

interface ListInvestmentGoalsRequest {
  name?: string
  months?: Months[]
}

export class ListInvestmentGoalsUseCase {
  constructor(private investmentGoalsRepository: InvestimentGoalsRepository) {}

  async execute(filters: ListInvestmentGoalsRequest) {
    const rows = await this.investmentGoalsRepository.list(filters)

    return { rows }
  }
}
