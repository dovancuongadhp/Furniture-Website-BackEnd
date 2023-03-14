import mongose from "mongoose";


const connectDb = () => {
    return mongose.connect(`${process.env.MONGODB_URI}`)
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((err) => console.log(err))
}


export default connectDb