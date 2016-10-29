// Calculate the total amount of weight the user has lifted
var calcTotal = function () {
    // A var for the value of each lift
    var squat = document.getElementById('squat').value || 0;
    var bench = document.getElementById('bench').value || 0;
    var deadlift = document.getElementById('deadlift').value || 0;
    
    // A total var which is the sum of each lift's value
    var total = parseFloat(squat) + parseFloat(bench) + parseFloat(deadlift);
    
    // The totalWeight label changes is into total
    document.getElementById('totalWeight').innerHTML = total;

    return total;
};

// Calculate the Wilks score the user gets based on the total weight lifted and the bodyweight
var calcWilks = function (total) {
    
    // Var bw contains the bodyweight as filled in by the user
    var bw = parseFloat(document.getElementById('bodyweight').value);
    var result;
    
    // Checks wether the female button or male button is checked
    if (document.getElementById('female').checked) {
        // Calculate the Wilks score for female lifters
        result = (total * (500 / (594.31747775582 + -27.23842536447 * bw + 0.82112226871 * Math.pow(bw, 2) + -0.00930733913 * Math.pow(bw, 3) + 0.00004731582 * Math.pow(bw, 4) + -0.00000009054 * Math.pow(bw, 5)))).toFixed(2);
    } else {
        // Calculate the Wilks score for male lifters
        result = (total * (500 / (-216.0475144 + 16.2606339 * bw + -0.002388645 * Math.pow(bw, 2) + -0.00113732 * Math.pow(bw, 3) + 0.00000701863 * Math.pow(bw, 4) + -0.00000001291 * Math.pow(bw, 5)))).toFixed(2);       
    };
    
    // Check if the number in the Wilks field is a proper number
    if (isNaN(result)) {
        document.getElementById('wilks').innerHTML = 0;
    } else {
        document.getElementById('wilks').innerHTML = result;
    };
};

var calc1RM = function () {
    
    // Put the weight and reps into vars
    var weight = parseFloat(document.getElementById('rm-weight').value) || 0;
    var reps = parseInt(document.getElementById('rm-reps').value) || 0;
    
    // Calculate the 1RM from the weight and reps with the Brzycki formula
    var oneRM = weight / (1.0278 - (0.0278 * reps));

    // Calculate the multiple Rep Maxes from the 1RM and reps with the Brzycki formula and put them in the table
    for (var i = 1; i < 13; i++) {
        document.getElementById([i] + 'RM').innerHTML = (oneRM * (1.0278 - (0.0278 * [i]))).toFixed(1);
    }
    
    //1. Brzycki
    //2. Epley
    //3. Lander
    //4. O'Conner et al.
    //5. Lombardi
    //6. Mayhew et al.
    //7. Wathen
}

var calcPercentage = function () {
    // Put the weight in to a var
    var weight = parseFloat(document.getElementById('percent-weight').value) || 0;
    
    // Calculate the percentages of the weight and put them in the table
    for (var i = 5; i <= 100; i += 5) {
        document.getElementById([i] + 'P').innerHTML = (weight / 100 * [i]).toFixed(1);
    }
    
}
