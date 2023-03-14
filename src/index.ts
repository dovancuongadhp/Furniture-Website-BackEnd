//----------- start import -----------
import express from 'express';
import appConfig from "./config";
import appRoutes from './routes';
// import Banner from './banner'
//------------ end import ------------

// [EXPRESS]
const app = express();

// [CONFIG]
appConfig(app)

// [ROUTES]
appRoutes(app)

// BANNER
// Banner()

const port = process.env.PORT;
const type_env = process.env.TYPE_ENV
app.listen(port,()=>{
    console.log(`Application run in ${type_env} - PORT: http://localhost:${port}`)
})