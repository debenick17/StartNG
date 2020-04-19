/* 
    Task:
    Write a function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below.
    * Numbers divisible by 2 are replaced by "yu"

    * Numbers divisible by 3 are replaced by "gi"

    * Numbers divisible by 5 are replaced by "oh"

    * Numbers are unchanged if not divsible by any of the above
     If a number is divisible by more than one of the above, replace and join the words representing their divsiors, separating by hyphen (-).
     NB: "divisible" in this case means no remainder after division.
    Return an array containing all numbers from 1 to the passed argument(inclusive) where all divisible numbers have been replaced as specified above.
    Call the function and pass 100 as an argument.
    Call the function and pass it a random number of your choice

*/

const divisibleNumber = function (num) {
    const array = [];
    for (let i = 1; i <= num; i++) {
      let syllabus = "";
      if (i % 2 === 0) {
        syllabus = "yu";
      }
      if (i % 3 === 0) {
        if (syllabus === "") {
          syllabus += "gi";
        } else {
          syllabus += "-gi";
        }
      }
      if (i % 5 === 0) {
        if (syllabus === "") {
          syllabus += "oh";
        } else {
          syllabus += "-oh";
        }
      }
      if (syllabus === "") {
        array.push(i);
      } else {
        array.push(syllabus);
      }
    }
    return array;
  };
  
  // Parsing 100 as Parameter
  const parse100 = divisibleNumber(100);
  console.log(parse100);
  
  // Parsing another Value as Parameter
  const parseAnother = divisibleNumber(80);
  console.log(parseAnother);