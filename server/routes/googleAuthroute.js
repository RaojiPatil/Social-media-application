const express = require("express");
const app = express();
const cors = require('cors');

const router = express.Router();
const google=require("../controllers/userController")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
middleware=require("../middleware/middleware")


// user login API and checking credentials

router.post("/", google.google);

module.exports = router;