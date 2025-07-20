import { Router } from 'express'
import { auth } from '../controllers/user/auth.controllers.js'
import { auth_middleware } from '../middlewares/auth.middlewares.js'

export const authRouter = Router()

authRouter.route('/register').post(auth.register)
authRouter.route('/login').post(auth.login)
// authRouter.route('/otp').post(auth.sendotp)
authRouter.route('/verify-otp').post(auth_middleware.check_user_role(['driver', 'passenger']), 
auth.verify_otp)

authRouter.route('/forget').post(auth_middleware.check_user_role(['driver', 'passenger']),
auth.forget_password)
authRouter.route('/reset').post(auth_middleware.check_user_role(['driver', 'passenger']),auth.reset_password)
