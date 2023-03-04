import { Application } from "express"

export default function appRoutes(app:Application){
    app.use("/sayHi",(req:any,res:any)=>{
        res.send("Say Hi")
    })

    app.use("/responseHi", (req:any, res:any) => {
        res.send("Vu Duy Nhien saw your message and He says hii")
    })
}