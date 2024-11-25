import dotenv from "dotenv"

dotenv.config()

const tourModel = {
    //READ
    async getAllToursModel(){
        try {
            const peticion = await fetch(process.env.URL_BDD_TOURS)
            const tours = await peticion.json()
            return tours

        } catch (error) {
            console.log(error)
        }
    },

    // CREATE
    async createTourModel(newTour){
        //1. Conexion BDD
        console.log(process.env.URL_BDD_TOURS)
        const url = process.env.URL_BDD_TOURS;

        //2. Enviar data a BDD
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Type":"application/json"}
        })

        //3. Obtener respuesta de BDD
        const data = await peticion.json()

        //4. Mandar respuesta al controlador
        return data
    },

    //UPDATE
    async updateTourModel (tourId,updatedTour) {
        //1. Conexion BDD
        const url = `${process.env.URL_BDD_TOURS}/${tourId}`

        //2. Enviar data a BDD
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedTour),
            headers:{"Content-Type":"application/json"}
        })

        //3. Obtener respuesta de BDD
        const data = await peticion.json()

        //4. Mandar respuesta al controlador
        return data 
        
    },

    //DELETE
    async deleteTourModel (tourId) {
        //1. Conexion BDD
        const url = `${process.env.URL_BDD_TOURS}/${tourId}`

        //2. Enviar data a BDD
        const peticion = await fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })

        //3. Obtener respuesta de BDD
        const data = await peticion.json()

        //4. Mandar respuesta al controlador
        return data 
        
    },

    //BUSCAR
    async searchToursModel(tourId){
        try {
            const peticion = await fetch(`${process.env.URL_BDD_TOURS}/${tourId}`)
            const tours = await peticion.json()
            return tours

        } catch (error) {
            console.log(error)
        }
    }
}

export default tourModel