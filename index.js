//import statements
const express=require('express');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const connectionDb = require('./config/db');
const path=require("path");
const Razorpay=require("razorpay")

//dotenv config
dotenv.config();

//mongodb connection
connectionDb();

//rest object
const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//port

const port=process.env.PORT || 8080;

//routes
app.use("/api/v1/user",require("./routes/userRoutes"));

app.use("/api/v1/admin",require("./routes/adminRoutes"));

app.use("/api/v1/organizer",require("./routes/organizerRoutes"));

app.use("/api/v1/sponsor",require("./routes/sponsorRoutes"));

app.use("/api/v1/payment",require("./routes/paymentRoutes"));

app.get("/api/v1/getkey",(req,res)=>
    res.status(200).json({
        key:process.env.RAZORPAY_KEY_ID
    })
)



    

//listen
app.listen(port,() => {
    console.log(`Server running in ${process.env.NODE_MODE} on port ${process.env.PORT}`.bgBlue.black);
});

