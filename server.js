import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './serverconfig.js';

const app = express();


// Connecting L DZEstate database fi mongodb atlas 
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB aw ymchi lets go !'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Test server aw ymchi at port:  ${PORT}`));