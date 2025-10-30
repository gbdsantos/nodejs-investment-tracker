import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

import { CreateInvestmentGoalUseCase } from '@/use-cases/create-investment-goal'
import { GetInvestmentGoalUseCase } from '@/use-cases/get-investment-goal'
import { ListInvestmentGoalsUseCase } from '@/use-cases/list-investiment-goals'
import { UpdateInvestmentGoalUseCase } from '@/use-cases/update-investment-goal'

import { PrismaInvestmentGoalsRepository } from '@/repositories/prisma/prisma-investment-goals-repository'

import { Months } from '@/@types/months'
import { DeleteInvestmentGoalUseCase } from '@/use-cases/delete-investment-goal'
import { InvestmentGoalNotFoundError } from '@/use-cases/errors/investment-goal-not-found-error'

const monthsSchema = z.array(z.enum(Object.values(Months) as Months[]))

export async function create(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { name, total_amount, months } = request.body as {
      name: string
      total_amount: number
      months: Months[]
    }

    const investmentGoalsRepository = new PrismaInvestmentGoalsRepository()
    const createInvestmentGoalUseCase = new CreateInvestmentGoalUseCase(
      investmentGoalsRepository
    )

    const goal = await createInvestmentGoalUseCase.execute({
      name,
      total_amount,
      months,
    })

    return reply.status(201).send(goal)
  } catch (error) {
    throw error
  }
}

export async function getById(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string }

    const investmentGoalsRepository = new PrismaInvestmentGoalsRepository()
    const getInvestmentGoalUseCase = new GetInvestmentGoalUseCase(
      investmentGoalsRepository
    )

    const goal = await getInvestmentGoalUseCase.execute(id)

    return reply.status(200).send(goal)
  } catch (error) {
    if (error instanceof InvestmentGoalNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}

export async function list(request: FastifyRequest, reply: FastifyReply) {
  try {
    const querySchema = z.object({
      name: z.string().optional(),
      months: z
        .preprocess((val) => {
          if (typeof val === 'string') {
            try {
              return JSON.parse(val)
            } catch (e) {
              return [val]
            }
          }
          return val
        }, monthsSchema)
        .optional(),
    })

    const filters = querySchema.parse(request.query)

    const investmentGoalsRepository = new PrismaInvestmentGoalsRepository()
    const listInvestmentGoalsUseCase = new ListInvestmentGoalsUseCase(
      investmentGoalsRepository
    )

    const data = await listInvestmentGoalsUseCase.execute(filters)

    return reply.status(200).send(data)
  } catch (error) {
    throw error
  }
}

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string }

    const investmentGoalsRepository = new PrismaInvestmentGoalsRepository()
    const deleteInvestmentGoalUseCase = new DeleteInvestmentGoalUseCase(
      investmentGoalsRepository
    )

    await deleteInvestmentGoalUseCase.execute(id)

    return reply.status(204).send()
  } catch (error) {
    if (error instanceof InvestmentGoalNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}

export async function update(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string }
    const { name, total_amount, months } = request.body as {
      name?: string
      total_amount?: number
      months?: Months[]
    }

    const investmentGoalsRepository = new PrismaInvestmentGoalsRepository()
    const updateInvestmentGoalUseCase = new UpdateInvestmentGoalUseCase(
      investmentGoalsRepository
    )

    const goal = await updateInvestmentGoalUseCase.execute(id, {
      name,
      total_amount,
      months,
    })

    return reply.status(200).send(goal)
  } catch (error) {
    if (error instanceof InvestmentGoalNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
