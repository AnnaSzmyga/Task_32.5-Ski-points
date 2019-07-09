const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, gateFactor = 0, windFactor = 0) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  const totalPoints = Math.round((distancePoints + stylePoints + gateFactor + windFactor) * 10) / 10;
  return totalPoints;
}

module.exports = calculateTotalPoints;