const jwt = require('jsonwebtoken');
const User = require('../model/User');
const bcrypt = require('bcryptjs')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};


// -------register user---------------

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }


    encryptedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ email, password: encryptedPassword });

    return res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
};

//----------------- auth user/ login ----------------

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    // console.log(user.password);
    // console.log(password)
    if (user) {
      const validUser = await bcrypt.compare(password, user.password)
      if (!validUser) return res.status(401).json({ message: "Invalid Password" })

      const token = generateToken(user._id)

      return res.status(200).json({message: "Logged in Succesfully", token : token})

    }
    else {
     return res.status(401).json({ message: 'Invalid email' });
    }
  } catch (error) {
    console.log("error in login", error);
    return res.status(500).json({ "message": "Server error" });
  }
};

module.exports = { registerUser, loginUser };
