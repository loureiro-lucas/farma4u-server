import { Router } from 'express'

import { checkIfIsAdmin } from '../../middlewares/authorization.middleware'
import clientController from './controllers'
import clientMiddlewares from './middlewares'
import { verifyAccessToken } from '../../middlewares/authentication.middleware'

const clientRouter: Router = Router()

// Criar cliente
clientRouter.post(
  '/',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validateCreateOnePayload,
  clientController.createOne
)

// Detalhes de um cliente
clientRouter.get(
  '/:id',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validateClientIdParam,
  clientController.findOneById
)

// Listar clientes
clientRouter.get(
  '/',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validatefindManyPayload,
  clientController.findMany
)

// Ativar cliente 
clientRouter.patch(
  '/:id/activate',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validateClientIdParam,
  clientController.activateOne
)

// Inativar cliente 
clientRouter.patch(
  '/:id/inactivate',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validateClientIdParam,
  clientController.inactivateOne
)

// Excluir cliente
clientRouter.patch(
  '/:id/delete',
  verifyAccessToken,
  checkIfIsAdmin,
  clientMiddlewares.validateClientIdParam,
  clientController.deleteOne
)

export { clientRouter }
