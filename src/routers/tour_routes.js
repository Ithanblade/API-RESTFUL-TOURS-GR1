import {Router} from 'express'
import { createTourController, deleteTourController, getAllToursController, searchToursController, updateTourController } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours',getAllToursController)

router.post('/tours',createTourController)

router.put('/tours/:id',updateTourController)

router.delete('/tours/:id',deleteTourController)

router.get('/tours/:id',searchToursController)



export default router