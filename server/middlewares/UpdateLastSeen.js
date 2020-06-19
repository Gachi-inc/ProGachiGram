const {UserModel} = require("../models/Schemes")


module.exports =  (req, _, next) => {
  if (req.user) {
    UserModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        last_seen: new Date(),
      },
      { new: true },
    );
  }
  next();
};
