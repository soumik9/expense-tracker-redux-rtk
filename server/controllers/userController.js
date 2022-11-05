const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

const index = async (req, res) => {
  try {
    const users = await User.find().sort("-createdAt");
    res.status(200).send({ datas: users, message: 'Successfully get users data!', success: true });
  } catch (error) {
    res.status(500).send({ error: error.message, message: 'Server side error', success: false });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const verifyUser = await User.findOne({ _id: id });
    if (!verifyUser) return res.status(404).send({ message: 'User not exists', success: false });

    if (req.body.password && req.body.confirmPassword) {
     
      if (req.body.password !== req.body.confirmPassword) return res.status(500).send({ message: 'Password error', success: false });

      const { email, ...data } = req.body;
      const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

      await User.findOneAndUpdate({ _id: id }, {
        $set: {...data, password: hashedPassword}
      });
    }else{
      const { email, password, confirmPassword, ...data } = req.body;
       await User.findOneAndUpdate({ _id: id }, {
        $set: data
      }, { runValidators: true });
    }

    res.json({ message: "User successfully updated", success: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message, message: 'Failed to update user', success: false });
  }
}

module.exports = { index, update }