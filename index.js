import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
//controllersからimportするroutes処理--------------------------------------
import TopRouter from './routes/TopRouter.js'

//------------------------------------------------------------------------
const app = express();
dotenv.config();
app.use(cors());
//router ※corsの下に配置--------------------------------------------------
app.use('/',TopRouter)
//------------------------------------------------------------------------

const PORT = process.env.PORT|| 3000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server Running on Port: http://localhost:${PORT}')))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);