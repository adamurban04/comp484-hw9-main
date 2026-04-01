// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
let today = new Date();

// Extract month, day, and year
// getMonth() returns 0-11, so we add 1 to get the actual month
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

// Add leading zeros if month or day is less than 10
let formattedMonth = month < 10 ? "0" + month : month;
let formattedDay = day < 10 ? "0" + day : day;

// Create the formatted date string (MM/DD/YYYY)
let dateString = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// Display the result on the page (textContent = raw text in value)
document.getElementById("dateOutput").textContent = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// Create 4 variables
let value1 = "25";       // Numeric string (integer)
let value2 = "2.15";    // Numeric string (decimal)
let value3 = "hey";    // Non-numeric string
let value4 = "50";      // Numeric string (integer)

// Convert each value using Number()
let converted1 = Number(value1);
let converted2 = Number(value2);
let converted3 = Number(value3);
let converted4 = Number(value4);

// Check if each converted value is NaN
let isNaN1 = Number.isNaN(converted1);
let isNaN2 = Number.isNaN(converted2);
let isNaN3 = Number.isNaN(converted3);
let isNaN4 = Number.isNaN(converted4);

// Check if each converted value is an integer
let isInt1 = Number.isInteger(converted1);
let isInt2 = Number.isInteger(converted2);
let isInt3 = Number.isInteger(converted3);
let isInt4 = Number.isInteger(converted4);

// Build result strings for each value
let result1 = "Original: '" + value1 + "' → Converted: " + converted1 + " → isNaN: " + isNaN1 + " → isInteger: " + isInt1;
let result2 = "Original: '" + value2 + "' → Converted: " + converted2 + " → isNaN: " + isNaN2 + " → isInteger: " + isInt2;
let result3 = "Original: '" + value3 + "' → Converted: " + converted3 + " → isNaN: " + isNaN3 + " → isInteger: " + isInt3;
let result4 = "Original: '" + value4 + "' → Converted: " + converted4 + " → isNaN: " + isNaN4 + " → isInteger: " + isInt4;

// Combine all results into one string with br's
let conversionOutput = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;

// Part 4 (1/2) (Conditional Message): Check if value3 is NaN and add a validation message
let nanCheckMessage = "";
if (Number.isNaN(converted3)) {
    nanCheckMessage = "'" + value3 + "' is not a valid number.";
} else {
    nanCheckMessage = "'" + value3 + "' is a valid number.";
}
conversionOutput += "<br><br><strong>Validation Check:</strong> " + nanCheckMessage;

// Display the results on the page
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Define numeric variables for grade scores
let score1 = 87;
let score2 = 92;
let score3 = 78;

// Calculate total score (addition)
let totalScore = score1 + score2 + score3;

// Calculate average score (division)
let averageScore = totalScore / 3;

// Format the average using toFixed(2)
let formattedAverage = averageScore.toFixed(2);

// Build output string showing the calculations
let mathOutput = "Score 1: " + score1 + "<br>";
mathOutput += "Score 2: " + score2 + "<br>";
mathOutput += "Score 3: " + score3 + "<br>";
mathOutput += "Total Score: " + totalScore + "<br>";
mathOutput += "<strong>Average Score: " + formattedAverage + "</strong>";

// Part 4 (2/2) (Conditional Message): Check if the average score is passing (70 or higher)
let passingMessage = "";
if (averageScore >= 70) {
    passingMessage = "Average of " + formattedAverage + " is Passing!";
} else {
    passingMessage = "Average of " + formattedAverage + " is Not Passing.";
}
mathOutput += "<br><br><strong>Grade Status:</strong> " + passingMessage;

// Display the results on the page
document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Extra Credit: typeof Section
// ==========================

// Create at least 5 values of different types
let typeValue1 = "Hello World";        // String
let typeValue2 = 42;                   // Number
let typeValue3 = true;                 // Boolean
let typeValue4 = undefined;            // Undefined
let typeValue5 = null;                 // Null
let typeValue6 = { name: "Adam" };     // Object

// Use typeof to identify each type
let type1 = typeof typeValue1;
let type2 = typeof typeValue2;
let type3 = typeof typeValue3;
let type4 = typeof typeValue4;
let type5 = typeof typeValue5;
let type6 = typeof typeValue6;

// Build output string showing values and their types
let typeOutput = "Value: \"Hello World\" → Type: <strong>" + type1 + "</strong><br>";
typeOutput += "Value: 42 → Type: <strong>" + type2 + "</strong><br>";
typeOutput += "Value: true → Type: <strong>" + type3 + "</strong><br>";
typeOutput += "Value: undefined → Type: <strong>" + type4 + "</strong><br>";
typeOutput += "Value: null → Type: <strong>" + type5 + "</strong><br>";
typeOutput += "Value: { name: \"Adam\" } → Type: <strong>" + type6 + "</strong>";

// Display the results on the page
document.getElementById("typeOutput").innerHTML = typeOutput;