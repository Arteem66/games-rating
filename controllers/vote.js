const fs = require('fs').promises
const {parseBody} = require('../appModules/http-utils')
const {
	PATH_TO_RATING_FILE,
	WEIGHT,
	createRating,
	updateRating,
} = require('../appModules/rating')

async function voteRouteController(req, res) {
  if (req.method != "POST") {
    res.statusCode = 404;
    res.end("Not Found");
  } else {
    try {
      const body = await parseBody(req);
      const data = JSON.parse(body);
      const rating = createRating(data, WEIGHT);
      
      const ratingFile = await fs.readFile(PATH_TO_RATING_FILE, 'utf8');
      const ratingArray = JSON.parse(ratingFile);
      const newRating = updateRating(ratingArray, data.id, rating);
      
      await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating));
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
    } catch {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}

module.exports = voteRouteController
