const express =require("express");
const userRoutes=require('./routes/user')
const {connectMongoDb}=require('./connection')
const{logReqRes}=require('./middlewares/index')
const app = express();
const bodyParser=require('body-parser')

//Routes
app.use(bodyParser.json())
app.use('/api/users',userRoutes);

app.use(logReqRes("logger.txt"))


app.use(express.urlencoded({ extended: false }));
connectMongoDb('mongodb://localhost:27017/User-App')
.then(()=>{
    console.log("connected to MongoDb")
})
.catch((err)=>{
    console.log("ERROR")
})


app.listen(7000, () => {
  console.log("server is running");
});
