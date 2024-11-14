import {Router} from 'express'
import { createTourController, getAllToursController, updateTourController } from '../controllers/tour_controller.js'
const router = Router()

router.get('/tours',getAllToursController)

router.post('/tours',createTourController)

router.put('/tours/:id',updateTourController)

export default router