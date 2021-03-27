import connectDB from "../../../utils/connectDB"
import User from "../../../models/userModel"
import valid from "../../../utils/valid"
import bcrypt from "bcryptjs"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await reg(req, res)
      break
  }
}

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const errMsg = valid(firstName, lastName, email, password)
    if (errMsg) return res.status(400).json({ err: errMsg })
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    })
    console.log(newUser)
    res.json({ msg: "Registration successfull" })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
