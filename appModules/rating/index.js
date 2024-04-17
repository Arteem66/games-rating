const makeRatingFile = require('./rating-file');
const {PATH_TO_RATING_FILE, WEIGHT} = require('./config')
const { createRating, updateRating } = require('./calculations');

module.exports = {
  makeRatingFile,
  createRating,
  updateRating,
  PATH_TO_RATING_FILE,
  WEIGHT
}