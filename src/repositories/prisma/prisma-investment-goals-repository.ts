import { prisma } from '@/database/prisma'
import {
  InvestimentGoals,
  Prisma,
  Months as PrismaMonths,
} from '@prisma/client'

import { CreateInvestmentGoalDto } from '../dtos/create-investment-goal.dto'
import { InvestmentGoalDto } from '../dtos/investment-goal.dto'
import { Months } from '@/@types/months'
import { UpdateInvestmentGoalDto } from '../dtos/update-investment-goal.dto'

import { InvestimentGoalsRepository } from '../investment-goals-repository'

export class PrismaInvestmentGoalsRepository
  implements InvestimentGoalsRepository
{
  private toDto(goal: InvestimentGoals): InvestmentGoalDto {
    return {
      ...goal,
      months: goal.months as Months[],
    }
  }

  async create(data: CreateInvestmentGoalDto): Promise<InvestmentGoalDto> {
    const investimentGoal = await prisma.investimentGoals.create({
      data: {
        ...data,
        months: data.months as PrismaMonths[],
      },
    })

    return this.toDto(investimentGoal)
  }

  async delete(id: string): Promise<void> {
    await prisma.investimentGoals.delete({
      where: { id },
    })
  }

  async getById(id: string): Promise<InvestmentGoalDto | null> {
    const goal = await prisma.investimentGoals.findUnique({
      where: { id },
    })

    return goal ? this.toDto(goal) : null
  }

  async update(
    id: string,
    data: UpdateInvestmentGoalDto
  ): Promise<InvestmentGoalDto> {
    const goal = await prisma.investimentGoals.update({
      where: { id },
      data: {
        ...data,
        months: data.months as PrismaMonths[],
      },
    })

    return this.toDto(goal)
  }

  async list(filters: {
    name?: string
    months?: Months[]
  }): Promise<InvestmentGoalDto[] | null> {
    const where: Prisma.InvestimentGoalsWhereInput = {}

    if (filters.name) {
      where.name = { contains: filters.name, mode: 'insensitive' }
    }

    if (filters.months) {
      where.months = { hasSome: filters.months as PrismaMonths[] }
    }

    const rows = await prisma.investimentGoals.findMany({ where })

    return rows.map(this.toDto)
  }
}
