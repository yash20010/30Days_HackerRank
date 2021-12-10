// Objective
// Today, we're delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video.

// Task
// You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

// Complete the Student class by writing the following:

// A Student class constructor, which has  parameters:
// A string, .
// A string, .
// An integer, .
// An integer array (or vector) of test scores, .
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
// Grading.png

// Input Format

// The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

// The first line contains , , and , separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes .

// Constraints

// Output Format

// Output is handled by the locked stub code. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

// Sample Input

// Heraldo Memelli 8135627
// 2
// 100 80
// Sample Output

//  Name: Memelli, Heraldo
//  ID: 8135627
//  Grade: O
// Explanation

// This student had  scores to average:  and . The student's average grade is . An average grade of  corresponds to the letter grade , so the calculate() method should return the character'O'.

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id)
    this.scores = scores
  }

  calculate() {
    const sum = this.scores.reduce((a, b) => a + b, 0)
    const avg = sum / this.scores.length
    switch (true) {
      case avg >= 90:
        return 'O'
        break
      case avg >= 80:
        return 'E'
        break
      case avg >= 70:
        return 'A'
        break
      case avg >= 55:
        return 'P'
        break
      case avg >= 40:
        return 'D'
        break
      default:
        return 'T'
    }
  }
}
