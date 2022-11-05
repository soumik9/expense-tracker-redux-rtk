const User = require('../models/userSchema');

const index = async (req, res) => {
    try {
      const users = await User.find().sort("-createdAt");
      res.status(200).send({datas: users, message: 'Successfully get users data!', success: true });
    } catch (error) {
      res.status(500).send({ error: error.message, message: 'Server side error', success: false });
    }
  }
  
  module.exports = { index }