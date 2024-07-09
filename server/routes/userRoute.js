const express=require("express")
const { registerUser, login, getUsers } = require("../controllers/userController")

const router=express.Router()

//register user
router.post('signup',registerUser)

//login user
router.post('/login',login)

//get User

router.get('/all-users',getUsers)

module.exports=router