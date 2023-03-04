import { Application } from "express"

export default function appRoutes(app:Application){
    app.use("/sayHi",(req:any,res:any)=>{
        res.send("Say Hi")
    })
    app.use("/hi", (req:any, res:any) => {
        res.send("I saw your message and reply: hi")
    })
}