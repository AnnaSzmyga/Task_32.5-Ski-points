const calculateStylePoints = (styleNotes) => {
    if (styleNotes.length !== 5) {
        console.log('Uncorrect number of notes!');
    } else {

    const minNote = Math.min(...styleNotes);
    const maxNote = Math.max(...styleNotes);
    console.log(minNote, maxNote);

    // remove min and max value from array
    styleNotes.splice(styleNotes.indexOf(minNote), 1);
    styleNotes.splice(styleNotes.indexOf(maxNote), 1);

    // sum of all array values
    const points = styleNotes.reduce((a, b) => {
        return a + b;
    });
    console.log(points);

    return points;

    }
};

module.exports = calculateStylePoints;