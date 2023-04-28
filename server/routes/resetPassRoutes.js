const express = require("express");
const app = express();
const cors = require('cors');

const router=express.Router();
const resetPassword=require("../controllers/userController")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

router.post("/",resetPassword.resetPassword);

module.exports=router;