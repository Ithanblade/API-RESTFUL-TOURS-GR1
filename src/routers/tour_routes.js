import {Router} from 'express'
import { createTourController, deleteTourController, getAllToursController, searchToursController, updateTourController } from '../controllers/tour_controller.js'
const router = Router()

//TOURS

//Pública
router.get('/tours',getAllToursController)

//Privada - Admin o Empleado
router.post('/tours',createTourController)

//Privada - Admin o Empleado
router.put('/tours/:id',updateTourController)

//Privada - Admin o Empleado
router.delete('/tours/:id',deleteTourController)

//Pública
router.get('/tours/:id',searchToursController)

//---------------------------0----------------------------------0-------------------------------0--------------

//Users

export default router