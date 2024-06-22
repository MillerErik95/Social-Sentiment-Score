Title:
Sentiment Analysis with Star Rating System

Summary:
This JavaScript program analyzes the sentiment of a review text file using predefined sentiment scores from a CSV file. It reads and processes the review text, calculates a sentiment score, and outputs a corresponding star rating.

Key Features:
Command-Line Argument Handling:

Accepts an optional command-line argument to specify the review file name. Defaults to review.txt if no argument is provided.
CSV File Reading and Parsing:

Reads socialsent.csv to create a dictionary mapping words to their sentiment scores.
Review File Processing:

Reads the review text, cleans it by removing punctuation and normalizing spaces.
Sentiment Score Calculation:

Splits the review text into words, calculates the total sentiment score using the dictionary.
Score Normalization and Output:

Normalizes the sentiment score to two decimal places.
Outputs the review file name, its sentiment score, and a star rating based on the score.
Usage:
Input Files:

socialsent.csv: A CSV file containing words and their corresponding sentiment scores.
review.txt or another specified review file: A text file containing the review to be analyzed.
Running the Program:

Use node program.js [review_filename] to run the program with an optional review file name argument.
Output:

The program prints the review file name, the calculated sentiment score, and the star rating to the console.
Example Output:
yaml
Copy code
review.txt score:  3.50
review.txt Stars:  4
This program is useful for evaluating the overall sentiment of a review based on predefined word scores, providing a simple and effective way to assign star ratings to textual reviews.
