import { AppError } from './app-error'

export class UserAlreadyExistsError extends AppError {
  constructor() {
    super('Investment goal with this name already exists.', 409)
  }
}
