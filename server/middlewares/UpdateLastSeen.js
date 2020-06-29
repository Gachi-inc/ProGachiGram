const {UserModel} = require("../models/Schemes")


module.exports =  (req, _, next) => {
  if (req.user) {
    UserModel.findOneAndUpdate({
      _id: req.user._id
    }, {
    $set: {last_seen: new Date()}, 
    }, 
    function (err) {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: err,
        });
      }
    }
    );
  }
  
  next();
};
