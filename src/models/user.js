
import bcrypt from "bcrypt"

const userModel = {

    async registerUserModel (newUser){
        const url = "http://localhost:4000/users";
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{"Content-Type":"application/json"}
        })
        const data = await peticion.json()
        return data
    }
    ,
    
    async loginUserModel (username,password){
        const url = "http://localhost:4000/users";
        const response = await fetch(url)
        const users = await response.json()

        const user = users.find(user => user.username === username)
        if(!user){
            return {error:"Username or password erroneos"}
        }
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(user && passwordMatch){
            return user
        }else{
            return {error:"Username or password erroneos"}
        }

}
}



export default userModel