import { Application } from "express"

export default function appRoutes(app:Application){
    app.use("/sayHi",(req:any,res:any)=>{
        res.send("Say Hi")
    })
}