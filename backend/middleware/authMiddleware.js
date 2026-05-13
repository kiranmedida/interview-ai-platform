const jwt = require("jsonwebtoken");


const protect = (req, res, next) => {

  try {

    console.log("HEADERS:");
    console.log(req.headers);

    const token = req.headers.authorization;

    console.log("TOKEN:");
    console.log(token);

    console.log("JWT SECRET:");
    console.log(process.env.JWT_SECRET);


    if (!token) {

      return res.status(401).json({
        message: "No Token",
      });
    }


    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:");
    console.log(decoded);


    req.user = decoded.id;

    next();

  } catch (error) {

    console.log("JWT ERROR:");
    console.log(error);

    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};


module.exports = protect;