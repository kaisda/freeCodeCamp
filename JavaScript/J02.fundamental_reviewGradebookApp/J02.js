// Step 1 Calculate the Average Score
function getAverage(scores) {
    let sum = 0;
    for (let score in scores) {
        sum += scores[score];
    }
    return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// Step 2 Convert Scores to letter grades
function getGrade(score) {
    if (score == 100) {
        return 'A++';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));


// Step 3 Calculate Passing Grade
function hasPassingGrade(score) {
    if (getGrade(score) != 'F') {
        return true;
    } else {
        return false;
    }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


// Step 4 Student Message
function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore)) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
}
studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)