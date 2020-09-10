// const stName = document.getElementById('st-name');
// const stNum = document.getElementById('st-num');
// const studentName = stName.value;
// const studentNumber = stNum.value;

const submit = document.getElementById('btn-submit');

//========= create an answers array =============== //
const answers = ['Charles Babbage', 'Debugging',
    'Machine Code', 'Infinite loop', 8];
// debugg
//console.log(typeof(answers[0]))
// console.log(typeof(answers[0].toString()))

// our students data will be stored in an odjects with {Name: ---, Number: --} key value pairs
students = {};

/*==== This main function is not really neccessary but 
    I am coming from a Java-centric programming style
    so, I thought it was neccessary to use it here
    ======*/

function main() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
}

main()

// scoreTracker
var scoreTracker = 0;

const totalScore = document.getElementsByClassName('query');
// debbug
// console.log(totalScore.length);

// question 1
function questionOne() {
  const checkBoxes1 = document.getElementsByClassName('q1');
  // debugg
  // console.log(checkBoxes1[0].checked)
  for ( let i = 0; i < checkBoxes1.length; i++ ) {
    if ( checkBoxes1[i].checked === false ) {
      checkBoxes1[i].addEventListener('click', (e) => {
        checkBoxes1[i].checked = true;
        // debugg
        // console.log(checkBoxes1[i].nextElementSibling.textContent);
        // console.log(typeof(checkBoxes1[i].nextElementSibling.textContent));
        if ( checkBoxes1[i].nextElementSibling.textContent === answers[0].toString() ) {
          // debugg
          // console.log(true);
          scoreTracker += 1;
        } else {
          scoreTracker = scoreTracker;
        }
        while( true ) {
          for ( let i = 0; i < checkBoxes1.length; i++ ) {
            checkBoxes1[i].disabled = true;
          }
          break;
        }
      })
    } else {
      checkBoxes1[i].checked = true;
    }
  }
}

// question2 
function questionTwo() {
  const  checkBoxes2 = document.getElementsByClassName('q2');
  for ( let i = 0; i < checkBoxes2.length; i++ ) {
    if ( checkBoxes2[i].checked === false ) {
      checkBoxes2[i].addEventListener('click', (e) => {
        checkBoxes2[i].checked = true;
        if ( checkBoxes2[i].nextElementSibling.textContent === answers[1] ) {
          scoreTracker += 1;
        } else {
          scoreTracker = scoreTracker;
        }
        while( true ) {
          for ( let i = 0; i < checkBoxes2.length; i++ ) {
            checkBoxes2[i].disabled = true;
          }
          break;
        }
      })
    } else {
      checkBoxes2[i].checked = true;
    }
  }
}

// question 3
function questionThree() {
  const checkBoxes3 = document.getElementsByClassName('q3');

  for ( let i = 0; i < checkBoxes3.length; i++ ) {
    if ( checkBoxes3[i].checked === false ) {
      checkBoxes3[i].addEventListener('click', (e) => {
        checkBoxes3[i].checked = true;
        if ( checkBoxes3[i].nextElementSibling.textContent === answers[2] ) {
          scoreTracker += 1;
        } else {
          scoreTracker = scoreTracker;
        }
        while( true ) {
          for ( let i = 0; i < checkBoxes3.length; i++ ) {
            checkBoxes3[i].disabled = true;
          }
          break;
        }
      })
    } else {
      checkBoxes3[i].checked = true;
    }
  }
}

// quesion four
function questionFour() {
  const checkBoxes4 = document.getElementsByClassName('q4');

  for ( let i = 0; i < checkBoxes4.length; i++ ) {
    if ( checkBoxes4[i].checked === false ) {
      checkBoxes4[i].addEventListener('click', (e) => {
        checkBoxes4[i].checked = true;
        if ( checkBoxes4[i].nextElementSibling.textContent === answers[3] ) {
          scoreTracker += 1;
        } else {
          scoreTracker = scoreTracker;
        }
        while( true ) {
          for ( let i = 0; i < checkBoxes4.length; i++ ) {
            checkBoxes4[i].disabled = true;
          }
          break;
        }
      })
    } else {
      checkBoxes4[i].checked = true;
    }
  }
}

// question 5
function questionFive() {
  const checkBoxes5 = document.getElementsByClassName('q5');

  for ( let i = 0; i < checkBoxes5.length; i++ ) {
    if ( checkBoxes5[i].checked === false ) {
      checkBoxes5[i].addEventListener('click', (e) => {
        checkBoxes5[i].checked = true;
        if ( checkBoxes5[i].nextElementSibling.textContent === answers[4].toString() ) {
          scoreTracker += 1;
        } else {
          scoreTracker = scoreTracker;
        }
        while( true ) {
          for ( let i = 0; i < checkBoxes5.length; i++ ) {
            checkBoxes5[i].disabled = true;
          }
          break;
        }
      })
    } else {
      checkBoxes5[i].checked = true;
    }
  }
}

// events

const SubmitButton = document.getElementById('sbmt').addEventListener('click', getResults);

function getResults(e) {
  // debugg
  // console.log(totalScore);
 
  confirm("Have you answered all the questions?");
  if ( confirm ) {
    alert(`You scored ${scoreTracker.toString()} out of ${totalScore.length.toString()}`);
    const totalMarks = document.getElementById('total-marks');
    totalMarks.innerHTML = totalScore.length;
    let finalMarks = document.getElementById('final-mark');
    finalMarks.innerHTML = scoreTracker;
  } else {
    e.preventDefault();
  }
  
}
submit.addEventListener('click', (e) => {

  const stName = document.getElementById('st-name');
  const stNum = document.getElementById('st-num');
  const studentName = stName.value;
  const studentNumber = stNum.value;

  alert(`Welcome ${studentName}! Let's get started`);

  students.name = studentName;
  students.number = studentNumber;

  storeStudentData();

})

// store student data to local storage

function storeStudentData() {
  console.log(students)
  window.localStorage.setItem('Students', JSON.stringify())
}

//==================================================  end ========================================//
