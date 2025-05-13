function calculateAverage() {
    var math = parseFloat(document.getElementById('math').value);
    var english = parseFloat(document.getElementById('english').value);
    var science = parseFloat(document.getElementById('science').value);
    var scores = [math, english, science].map(Number);

    var average = (math + english + science) / 3;

    var rating;
    if (average >= 94) {
        rating = "Excellent";
    } else if (average >= 87) {
        rating = "Above Satisfactory";
    } else if (average >= 80) {
        rating = "Satisfactory";
    } else if (average >= 75) {
        rating = "Needs Improvement";
    } else if (average >= 70) {
        rating = "Poor";
    } else {
        rating = "Failing";
    }


    document.getElementById('result').innerHTML = `Average Grade: ${average.toFixed(2)} -  ${rating}`;

    if (!math || !english || !science) {
       alert('Please enter all grades.');
    } else if (scores.some(score => isNaN(score) || score < 0 || score > 100)) {
        alert('Please enter a valid input.');
    } else {
       alert(`Average Grade: ${average.toFixed(2)} -  ${rating}`);
    }
}

