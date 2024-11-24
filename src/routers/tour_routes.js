import {Router} from 'express'
import { createTourController, deleteTourController, getAllToursController, searchToursController, updateTourController } from '../controllers/tour_controller.js'
import { verifyToken } from '../middlewares/auth.js'
const router = Router()

//TOURS

//Pública
router.get('/tours',getAllToursController)
router.get('/tours/:id',searchToursController)

//Privada - Admin o Empleado
router.post('/tours',verifyToken,createTourController)
router.put('/tours/:id',verifyToken,updateTourController)
router.delete('/tours/:id',verifyToken,deleteTourController)




export default router