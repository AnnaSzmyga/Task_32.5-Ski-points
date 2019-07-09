const roundDistance = (distance) => {
    if ((distance - Math.floor(distance)) <= 0.3) {
        return Math.floor(distance);
    } else if ((distance - Math.floor(distance)) >= 0.7) {
        return Math.ceil(distance);
    } else {
        return (Math.floor(distance) + 0.5);
    }
};


const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const finalDistance = roundDistance(distance);

    let basicPoints = 0;
    let hillCoefficient = 0;

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