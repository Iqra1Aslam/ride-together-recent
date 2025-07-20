import { Router } from 'express'

import { auth_middleware } from '../middlewares/auth.middlewares.js'
import { admin } from '../controllers/admin.controller.js';


export const router = Router();
router.route('/set-admin').patch(
    auth_middleware.check_user_role(['admin']),  
    auth_middleware.check_is_admin,
    admin.setAdminRole
);
router.get('/getAllPassengers',

    auth_middleware.check_user_role(['admin']),  
auth_middleware.check_is_admin,
 admin.getAllPassengers);


router.delete('/deletePassenger/:id', auth_middleware.check_user_role(['admin']), admin.deletePassenger);


router.patch('/updatePassenger/:id',
     auth_middleware.check_user_role(['admin']),admin.updatePassenger);
router.get('/getAllDrivers',
    auth_middleware.check_user_role(['admin']),  
auth_middleware.check_is_admin, 
admin.getAllDrivers);
router.patch('/updateDriver/:id', auth_middleware.check_user_role(['admin']),admin.updateDriver);
router.delete('/deleteDriver/:id',auth_middleware.check_user_role(['admin']), admin.deleteDriver);



