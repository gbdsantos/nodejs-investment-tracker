import { FastifyTypeInstance } from './@types/fastify'
import z from 'zod'

import {
  create,
  getById,
  list,
  remove,
  update,
} from './controllers/investment-goals-controller'
import { Months } from './@types/months'

export async function appRoutes(app: FastifyTypeInstance) {
  app.post(
    '/investment-goals',
    {
      schema: {
        body: z.object({
          name: z.string().min(1),
          total_amount: z.number().positive(),
          months: z.array(z.enum(Months)).nonempty(),
        }),
        description: 'Create a new investment goal',
        tags: ['Goals'],
      },
    },
    create
  )

  app.get(
    '/investment-goals',
    {
      schema: {
        description: 'List all investment goals',
        tags: ['Goals'],
      },
    },
    list
  )

  app.get(
    '/investment-goals/:id',
    {
      schema: {
        params: z.object({
          id: z.uuid(),
        }),
        description: 'Get an investment goal by ID',
        tags: ['Goals'],
      },
    },
    getById
  )

  app.put(
    '/investment-goals/:id',
    {
      schema: {
        params: z.object({
          id: z.uuid(),
        }),
        body: z.object({
          name: z.string().min(1).optional(),
          total_amount: z.number().positive().optional(),
          months: z
            .array(z.enum(Object.values(Months) as Months[]))
            .nonempty()
            .optional(),
        }),
        description: 'Update an investment goal by ID',
        tags: ['Goals'],
      },
    },
    update
  )

  app.delete(
    '/investment-goals/:id',
    {
      schema: {
        description: 'Delete an investment goal by ID',
        params: z.object({
          id: z.uuid(),
        }),
        response: {
          204: z.null().describe('Investment goal deleted successfully.'),
        },
        tags: ['Goals'],
      },
    },
    remove
  )
}
