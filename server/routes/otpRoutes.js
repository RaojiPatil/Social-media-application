const express = require("express");
const app = express();
const cors = require('cors');




 
const router=express.Router();
const otpSend=require("../controllers/userController")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


router.post("/", otpSend.otpSend)


module.exports=router;