const User=require('../Models/User')
const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users: users });
  } catch (error) {
    res.json({ msg: "failed to get all users" });
  }
};

const deleteAllusers = async (req, res) => {
    try {
        const userId = req.params['id'];
        const deleteuser = await User.findByIdAndRemove({_id: userId})

        res.status(201).json({user: deleteuser})


    } catch (error) {
        res.status(400).json({msg:"failed to delete user"})
    }

  };



module.exports = { getAllusers,deleteAllusers };
