const axios = require("axios")

module.exports = {
    findAPIFood: function(req, res) {
        let food = req.params.food;
        let diet = req.params.diet;
        let apiID = process.env.API_ID;
        console.log("apiID", apiID)
        let apiKey = process.env.API_KEY;
        console.log("apiKey", apiKey)

        if (req.params.diet != "No-Diet") {
          axios
            .get(
              `https://api.edamam.com/search?q=${food}&app_id=${apiID}&app_key=${apiKey}&health=${diet}`
            )
            .then(function(data) {
              res.json(data.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .get(
              `https://api.edamam.com/search?q=${food}&app_id=${apiID}&app_key=${apiKey}`
            )
            .then(function(data) {
              res.json(data.data);
            })
            .catch((err) => {
              if (err) throw err;
            });
        }
    }
}