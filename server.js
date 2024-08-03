const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const ProductRoute = require('./router/ProductRoute');
const Product = require('./model/Product');

const PORT = process.env.port;

const app = express();


app.listen(PORT, (e) => {
    if (e) {
        console.log(`server not running`)
    } else (
        console.log(`server running on PORT ${PORT}`)
    )
});

app.get('/demo',(req,res)=>{
 return  res.send("welcome to my project")
})

app.use('/test',(req,res)=>{
    return  res.send("welcome to my test ")
})

// app.use(cors({ origin: "*",methods: ["POST", "GET"],credentials: true }));

app.use(cors(
    {
        origin: ["*"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())


app.get('/get',async (req, res) => {
    try {
        // const products = await Product.find();
        // res.json(products);
        res.send("Hello")
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})



// app.use("/public",express.static(__dirname+'/uploads'));

const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)
    .then(() => console.log(`MongoDB connneted in ${PORT}`))
    .catch(() => console.log(`MongoDB notConnected`))