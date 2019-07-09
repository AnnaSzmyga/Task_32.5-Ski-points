const calculateStylePoints = (styleNotes) => {
    if (styleNotes.length !== 5) {
        console.log('Uncorrect number of notes!');
        return 0;
    } else {

        const minNote = Math.min(...styleNotes);
        const maxNote = Math.max(...styleNotes);

        // remove min and max value from array
        styleNotes.splice(styleNotes.indexOf(minNote), 1);
        styleNotes.splice(styleNotes.indexOf(maxNote), 1);

        // sum of all array values
        const points = styleNotes.reduce((a, b) => {
            return a + b;
        });

        return points;
    }
};

module.exports = calculateStylePoints;