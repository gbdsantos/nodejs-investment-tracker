import fastify from 'fastify'
import { fastifySwagger } from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { z, ZodError } from 'zod'

import { AppError } from './use-cases/errors/app-error'
import { appRoutes } from './routes'

import { env } from './env'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Investiment Tracker',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(appRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error.code === 'FST_ERR_VALIDATION') {
    return reply.status(400).send({
      issues: error.validation,
      message: 'Validation error',
      status_code: error.statusCode,
    })
  }

  if (error.code === 'FST_ERR_CTP_INVALID_JSON_BODY') {
    return reply.status(400).send({
      message: 'Verify JSON structure or syntax.',
      status_code: error.statusCode,
      issues: error.validation,
    })
  }

  if (error instanceof ZodError) {
    const errors = z.treeifyError(error)

    return reply.status(400).send({
      issues: errors,
      message: 'Validation error',
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      error: {
        message: error.message,
        status_code: error.errorCode || 'APP_ERROR',
      },
    })
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
