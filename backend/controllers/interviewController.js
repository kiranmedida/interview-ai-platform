const Interview = require("../models/Interview");


const getInterviewHistory = async (req, res) => {

  try {

    const interviews = await Interview.find({

      user: req.user,

    }).sort({

      createdAt: -1,
    });


    res.status(200).json(interviews);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  getInterviewHistory,
};