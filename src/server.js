//Requerir modulos
//ESMODULES
import express from 'express'
import routerTour from './routers/tour_routes.js'
import routerUser from './routers/user_routes.js'

//INICIALIZACIONES
const app =express()

//VARIABLES
app.set('port',process.env.port || 3000)

//MIDDLEWARE
app.use(express.json())

//RUTA PRINCIPAL
app.get('/',(req,res)=>{
    res.send("OK")
})

//RUTAS PARA EL TOUR
app.use('/api',routerTour)


//RUTAS PARA EL USER
app.use('/api',routerUser)

//RUTAS PARA EL BOOKING



//EXPORTAR LA INSTANCIA DE APP
export default app







