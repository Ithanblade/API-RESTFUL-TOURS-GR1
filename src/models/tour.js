const tourModel = {
    //READ
    async getAllToursModel(){
        try {
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            return tours

        } catch (error) {
            console.log(error)
        }
    },

    // CREATE
    async createTourModel(newTour){
        //1. Conexion BDD
        const url = "http://localhost:4000/tours";

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
        const url = `http://localhost:4000/tours/${tourId}`

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
        
    }

}

export default tourModel