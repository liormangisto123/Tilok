const guide = require("../modules/guide-model");

const logIn = (req, res) => {
  const query = {};
  query.email = req.query.email;

  query.password = req.query.password;

  // minNum: { $gte:req.query.priceMin, $lte: req.query.cost }
  // const { lang, country,city,cost } = req.params;
  // const q = { Language: lang, country,city,cost }
  // db.student.find({ u1 : { $gt :  30, $lt : 60}});

  guide
    .find(query)
    .then((guides) => {
      if (!guides.length) {
        return res.status(404).json({
          success: false,
          error: "not found a single guide in the chosen country",
        });
      }
      return res.status(200).json({ success: true, data: guides });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: error,
        message: "Could not get country!",
      });
    });
};

const search = (req, res) => {
  const query = {};
  if (req.query.country) {
    query.country = req.query.country;
  }
  if (req.query.lang) {
    //todo fix query language array
    query.Language = req.query.lang;
  }
  if (req.query.city) {
    query.city = req.query.city;
  }
  if (req.query.cost) {
    query.cost = { $lt: Number(req.query.cost) };
  }
console.log(query)
  guide
    .find(query)
    .then((guides) => {
      if (!guides.length) {
        return res.status(404).json({
          success: false,
          error: "not found a single guide in the chosen country",
        });
      }
      return res.status(200).json({ success: true, data: guides });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: error,
        message: "Could not get country!",
      });
    });
};

module.exports = {
  search,
  logIn,
};
