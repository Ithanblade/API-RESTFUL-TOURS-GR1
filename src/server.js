//Requerir modulos
//ESMODULES
import express from 'express'

import cloudinary from 'cloudinary'
import fileupload from 'express-fileupload'
import dotenv from 'dotenv'


import routerTour from './routers/tour_routes.js'
import routerUser from './routers/user_routes.js'

//para cargar variables de entorno
dotenv.config()


//INICIALIZACIONES
const app =express()

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_APY_KEY, 
    api_secret: process.env.CLOUDINARY_APY_SECRET
});


//crear carpeta temporal para las imagenes
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));


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







