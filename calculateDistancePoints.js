const roundDistance = (distance) => {
    const x = Math.round(distance);
    if ((x - Math.floor(x)) <= 0.3) {
        return Math.floor(x);
    } else if ((x - Math.floor(x)) >= 0.7) {
        return Math.ceil(x);
    } else {
        return Math.floor(x) + 0.5;
    }
};


const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const finalDistance = roundDistance(distance);
    let basicPoints;
    let hillCoefficient;

    switch(hillSize) {
        case "normal":
            basicPoints = 60;
            hillCoefficient = 2;
            break;
        case "large":
            basicPoints = 60;
            hillCoefficient = 1.8;
            break;
        case "ski flying":
            basicPoints = 120;
            hillCoefficient = 1.2;
            break;
        default:
            console.log('Uncorrect hill type!');
      }

    let bonusPoints = Math.abs(kPoint - finalDistance) * hillCoefficient;
    let points;
    if (finalDistance > kPoint) {
        points = basicPoints + bonusPoints;
    } else {
        points = basicPoints - bonusPoints;
    }

    return points;
  };

  module.exports = calculateDistancePoints;