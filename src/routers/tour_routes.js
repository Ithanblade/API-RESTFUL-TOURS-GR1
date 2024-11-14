import {Router} from 'express'
import { createTourController, deleteTourController, getAllToursController, updateTourController } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours',getAllToursController)

router.post('/tours',createTourController)

router.put('/tours/:id',updateTourController)

router.delete('/tours/:id',deleteTourController)


export default router