//----------- start import -----------
import express from 'express';
import appConfig from "./config";
import appRoutes from './routes';

//------------ end import ------------

// [EXPRESS]
const app = express();

// [CONFIG]
appConfig(app)

// [ROUTES]
appRoutes(app)




const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`application run port : ${port}`)
})