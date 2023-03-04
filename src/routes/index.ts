import { Application } from "express"

export default function appRoutes(app:Application){
    app.use("/sayHi",(req:any,res:any)=>{
        res.send("Say Hi")
    })

    app.use("/sendmessage", (req:any, res: any) => {
        console.log("its okey")
    })
}