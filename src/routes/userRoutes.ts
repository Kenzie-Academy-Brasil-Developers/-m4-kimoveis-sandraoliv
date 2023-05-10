import { Router } from 'express'
import { createUserController } from '../controllers/createUserController'
import { listUsersController } from '../controllers/listUsersController'
import { updateUserController } from '../controllers/updateUserController'
import { ensureEmailIsUniqueMiddleware } from '../middlewares/ensureEmailIsUniqueMiddleware'
import { serializedUserDataMiddleware } from '../middlewares/serializerMiddleware'
import { ensureTokenIsValidMiddleware } from '../middlewares/validateTokenMiddlewarw'
import { deleteUserController } from '../controllers/deleteUserController'
import { userSchema, userSchemaRequest, userSchemaResponse, userUpdateSchema } from '../schemas/userschemas'
import { ensureIdExistsMiddleware } from '../middlewares/ensureUserExistsMiddleware'
import { ensureUserIsAdminOrOwnerMiddleware } from '../middlewares/ensureUserIsAdminOrOwnerMiddleware'
import { ensureUserIsAdminMiddleware } from '../middlewares/ensureUserIsAdminMiddleware'

export  const userRoutes: Router = Router()

userRoutes.post("",
serializedUserDataMiddleware(userSchema),
ensureEmailIsUniqueMiddleware,
createUserController)

userRoutes.get("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
listUsersController)

userRoutes.patch("/:id",
ensureTokenIsValidMiddleware,
ensureIdExistsMiddleware,
ensureEmailIsUniqueMiddleware,
serializedUserDataMiddleware(userUpdateSchema),
ensureUserIsAdminOrOwnerMiddleware,
updateUserController)

userRoutes.delete("/:id",
ensureIdExistsMiddleware,
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
deleteUserController)