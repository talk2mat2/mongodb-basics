const express= require('express');
const app = express();
const connectDB = require('./database/connection')

connectDB()
app.use(express.json({extended:false}));
app.use('/Api/usermodel',require('./Api/user'));
app.listen(8080,()=>(console.log('server runinng on port 8080')));