import { AppError } from './app-error'

export class InvestmentGoalNotFoundError extends AppError {
  constructor() {
    super('Investment goal not found.', 404)
  }
}
