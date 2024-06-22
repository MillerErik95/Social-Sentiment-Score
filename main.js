// capture command line argument
// Default file set to.. 'review.txt' 
var review_filename = 'review.txt';
if (process.argv[2]) {
    review_filename = process.argv[2];
}
console.log("\n ", review_filename);
// Imports .csv files to string
// Splits strings by new line, returns list
var socialsent_raw_data = require('fs').readFileSync('socialsent.csv', 'utf8');
var socialsent_list = socialsent_raw_data.split(/\r?\n/);
// Creating map by looping through the list 
// Seperated by commas
var socialsent_map = {};
for (var i = 0; i < socialsent_list.length; i++) {
    var parts = socialsent_list[i].split(',');
    socialsent_map[parts[0]] = parseFloat(parts[1]);
}
;
// Imports .txt files to string
// Removes dashes, commas, etc out of strings
var review_file_raw_data = require('fs').readFileSync(review_filename, 'utf8')
    .replace(/[.|,|'|(|)|\\|/|!]/g, '')
    .replace(/-/g, ' ')
    .replace(/  /g, ' ')
    .replace(/\n/g, ' ');
// Seperates words by whitespaces
// Displays list of words to console
var review_file_words = review_file_raw_data.split(' ');
console.log(review_file_words);
// Loops through list of sentiment socres, creating total sum
// If the word in the .txt exists in the .csv, add score to sum
// Converting all words to lowercase
var sum = 0;
review_file_words.forEach(function (word) {
    if (socialsent_map[word.toLowerCase()]) {
        sum += socialsent_map[word.toLowerCase()];
    }
});
// Setting sum to a decimal with 2 places
// Displaying.. file name and score
// Determining/displaying.. file name and star score 
var score = +sum.toFixed(2);
console.log(review_filename, " score: ", score);
if (score < -5)
    console.log(review_filename, " Stars:  1");
else if ((score >= -5) && (score < -1.0))
    console.log(review_filename, " Stars:  2");
else if ((score >= -1.0) && (score < 1.0))
    console.log(review_filename, " Stars:  3");
else if ((score >= 1.0) && (score < 5.0))
    console.log(review_filename, " Stars:  4");
else if (score >= 5.0)
    console.log(review_filename, " Stars:  5");
