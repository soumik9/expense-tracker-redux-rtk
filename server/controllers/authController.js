const User = require('../models/userSchema');
const generateToken = require('../utils/generateToken');
 
const signup = async (req, res) => {
    try {
        const findUser = await User.findOne({ email: req.body.email });
        if(findUser) return res.status(500).send({ message: 'Already exists', success: false });

        // checking password length
        if(req.body.password.length < 6) return res.status(500).send({ message: 'Minimum six password', success: false });
        // checking is password matched
        if(req.body.password !== req.body.confirmPassword) return res.status(500).send({ message: `Password didn't matched`, success: false });

        const user = new User(req.body);
        await user.save();
        res.send({ user, message: 'Successfully created user', success: true });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: error.message, message: 'Server side error', success: false });
      }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking email and password given
    if(!email || !password) return res.status(500).send({ message: 'Credential mismatch!', success: false });

    // checking is user registred
    const user = await User.findOne({ email });
    if(!user) return res.status(404).send({ message: 'User not found!', success: false });

    // comparing password
    const isPasswordValid = user.comparePassword(password, user.password);
    if(!isPasswordValid) return res.status(403).send({ message: 'Password not matched!', success: false });

    // token
    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();
    res.status(200).send({ data:{ user: others, accessToken: token }, message: 'Successfully logged!', success: true });
  } catch (error) {
    res.status(500).send({ error: error.message, message: 'Server side error', success: false });
  }
}

const profile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user?.email });
    res.status(200).send({data: user, message: 'Successfully get user data!', success: true });
  } catch (error) {
    res.status(500).send({ error: error.message, message: 'Server side error', success: false });
  }
}

module.exports = { signup, login, profile }