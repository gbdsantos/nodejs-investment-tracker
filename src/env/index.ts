import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  const errors = z.treeifyError(_env.error)
  console.error('❌ Invalid environment variables:', errors)
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
