const express = require('express');
const bodyParser = require('body-parser');
const registerRouter = require('./src/routes/registerRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/register',registerRouter);

app.get('/',(req,res)=>{
    res.send(' My server is running')
})


app.listen(3000,()=>console.log('listening to port 3000'));