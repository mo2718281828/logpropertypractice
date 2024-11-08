// Questions Array
const questions = [
  // Expand the logarithm as much as possible
  {
    type: 'expand',
    problem: '\\ln\\left( x y \\right)',
    correctAnswer: '\\ln x + \\ln y',
    incorrectAnswers: [
      '\\ln x - \\ln y',
      '\\ln\\left( x + y \\right)',
      '\\ln x \\cdot \\ln y',
      '\\frac{\\ln x}{\\ln y}',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log\\left( \\frac{a}{b} \\right)',
    correctAnswer: '\\log a - \\log b',
    incorrectAnswers: [
      '\\log a + \\log b',
      '\\log\\left( a - b \\right)',
      '\\frac{\\log a}{\\log b}',
      '\\log a \\cdot \\log b',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_2\\left( x^3 y \\right)',
    correctAnswer: '3\\log_2 x + \\log_2 y',
    incorrectAnswers: [
      '\\left( \\log_2 x \\right)^3 + \\log_2 y',
      '\\log_2\\left( x^3 \\right) + \\log_2 y',
      '3\\log_2\\left( x y \\right)',
      '3\\log_2 x \\cdot \\log_2 y',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\ln\\left( \\sqrt{a b} \\right)',
    correctAnswer: '\\frac{1}{2} \\ln a + \\frac{1}{2} \\ln b',
    incorrectAnswers: [
      '\\sqrt{\\ln a + \\ln b}',
      '\\frac{1}{2} \\ln a - \\frac{1}{2} \\ln b',
      '\\ln\\left( a^{1/2} + b^{1/2} \\right)',
      '\\ln a^{1/2} \\cdot \\ln b^{1/2}',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_3\\left( \\frac{x^2}{y^3} \\right)',
    correctAnswer: '2\\log_3 x - 3\\log_3 y',
    incorrectAnswers: [
      '\\frac{2\\log_3 x}{3\\log_3 y}',
      '2\\log_3 x + 3\\log_3 y',
      '\\log_3\\left( x^2 \\right) - \\log_3\\left( y^3 \\right)',
      '\\log_3\\left( x^2 - y^3 \\right)',
      '\\text{Cannot be simplified}'
    ]
  },
  // Condense into a single logarithm
  {
    type: 'condense',
    problem: '2\\ln x + \\frac{1}{2} \\ln y',
    correctAnswer: '\\ln\\left( x^2 y^{1/2} \\right)',
    incorrectAnswers: [
      '\\ln\\left( x^2 + y^{1/2} \\right)',
      '\\ln\\left( \\frac{x^2}{y^{1/2}} \\right)',
      '\\ln\\left( x^2 y \\right)',
      '\\ln\\left( x y \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\log_5 a - 3\\log_5 b',
    correctAnswer: '\\log_5\\left( \\dfrac{a}{b^3} \\right)',
    incorrectAnswers: [
      '\\log_5\\left( \\dfrac{a^3}{b} \\right)',
      '\\log_5\\left( a b^3 \\right)',
      '\\log_5\\left( a - b^3 \\right)',
      '\\dfrac{\\log_5 a}{\\log_5 b^3}',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\ln x - \\ln y + \\ln z',
    correctAnswer: '\\ln\\left( \\dfrac{x z}{y} \\right)',
    incorrectAnswers: [
      '\\ln\\left( x y z \\right)',
      '\\ln\\left( x - y + z \\right)',
      '\\ln\\left( \\dfrac{x}{y z} \\right)',
      '\\ln\\left( \\dfrac{x z}{y^{-1}} \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\log\\left( 4 \\right) + \\log\\left( 5 \\right)',
    correctAnswer: '\\log\\left( 20 \\right)',
    incorrectAnswers: [
      '\\log\\left( 9 \\right)',
      '\\log\\left( 1 \\right)',
      '\\log\\left( 80 \\right)',
      '\\log\\left( 4^{5} \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '3\\log_2 x - \\frac{1}{2} \\log_2 y',
    correctAnswer: '\\log_2\\left( \\dfrac{x^3}{y^{1/2}} \\right)',
    incorrectAnswers: [
      '\\log_2\\left( x^3 y^{1/2} \\right)',
      '\\log_2\\left( x^3 - y^{1/2} \\right)',
      '\\log_2\\left( \\dfrac{x^3}{y^2} \\right)',
      '\\log_2\\left( x^{3/2} y \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  // Additional questions
  // Expand type
  {
    type: 'expand',
    problem: '\\ln\\left( \\dfrac{\\sqrt{x}}{y z^2} \\right)',
    correctAnswer: '\\dfrac{1}{2} \\ln x - \\ln y - 2 \\ln z',
    incorrectAnswers: [
      '\\ln\\left( x^{1/2} \\right) - \\ln\\left( y z^2 \\right)',
      '\\dfrac{1}{2} \\ln x + \\ln y + 2 \\ln z',
      '\\ln\\left( x^{1/2} - y - z^2 \\right)',
      '\\ln x - \\ln y - \\ln z^2',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_7\\left( m^2 n^3 p \\right)',
    correctAnswer: '2 \\log_7 m + 3 \\log_7 n + \\log_7 p',
    incorrectAnswers: [
      '\\log_7\\left( m^2 + n^3 + p \\right)',
      '\\log_7 m^2 + \\log_7 n^3 + \\log_7 p',
      '2 \\log_7 m \\cdot 3 \\log_7 n \\cdot \\log_7 p',
      '\\log_7\\left( m n p \\right)^2',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log\\left( a^4 b \\right)',
    correctAnswer: '4 \\log a + \\log b',
    incorrectAnswers: [
      '\\log\\left( a^4 + b \\right)',
      '\\left( \\log a \\right)^4 + \\log b',
      '4 \\left( \\log a + \\log b \\right)',
      '\\log a^4 \\cdot \\log b',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\ln\\left( \\dfrac{x}{y^2} \\right)',
    correctAnswer: '\\ln x - 2 \\ln y',
    incorrectAnswers: [
      '\\ln x + 2 \\ln y',
      '\\dfrac{\\ln x}{2 \\ln y}',
      '\\ln\\left( x - y^2 \\right)',
      '\\ln x - \\ln y^2',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_5\\left( \\sqrt{m n^3} \\right)',
    correctAnswer: '\\dfrac{1}{2} \\log_5 m + \\dfrac{3}{2} \\log_5 n',
    incorrectAnswers: [
      '\\dfrac{1}{2} \\log_5 m + 3 \\log_5 n',
      '\\log_5 m^{1/2} + \\log_5 n^{3/2}',
      '\\dfrac{1}{2} \\log_5\\left( m n^3 \\right)',
      '\\dfrac{\\log_5 m}{2} + \\dfrac{\\log_5 n}{3}',
      '\\text{Cannot be simplified}'
    ]
  },
  // Condense type
  {
    type: 'condense',
    problem: '4 \\log x - \\log y + 2 \\log z',
    correctAnswer: '\\log\\left( \\dfrac{x^4 z^2}{y} \\right)',
    incorrectAnswers: [
      '\\log\\left( \\dfrac{x^4 z^2}{y^{-1}} \\right)',
      '\\log\\left( x^4 y z^2 \\right)',
      '\\log\\left( x^4 - y + z^2 \\right)',
      '\\log\\left( \\dfrac{x^4}{y z^2} \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\ln 5 + \\dfrac{1}{3} \\ln a',
    correctAnswer: '\\ln\\left( 5 a^{1/3} \\right)',
    incorrectAnswers: [
      '\\ln\\left( 5 + a^{1/3} \\right)',
      '\\ln\\left( \\dfrac{5}{a^{1/3}} \\right)',
      '\\ln\\left( 5 a^3 \\right)',
      '\\ln\\left( 5^{1/3} a \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '2 \\log_4 x + \\dfrac{1}{2} \\log_4 y - \\log_4 z',
    correctAnswer: '\\log_4\\left( \\dfrac{x^2 y^{1/2}}{z} \\right)',
    incorrectAnswers: [
      '\\log_4\\left( x^2 y^{1/2} z \\right)',
      '\\log_4\\left( \\dfrac{x^2}{y^{1/2} z} \\right)',
      '\\log_4\\left( x^2 y^{1/2} - z \\right)',
      '\\log_4\\left( \\dfrac{x^2}{y^{1/2} z} \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\ln\\left( x \\right) + \\ln\\left( y \\right) - \\ln\\left( z^2 \\right)',
    correctAnswer: '\\ln\\left( \\dfrac{x y}{z^2} \\right)',
    incorrectAnswers: [
      '\\ln\\left( x y z^{2} \\right)',
      '\\ln\\left( x + y - z^2 \\right)',
      '\\ln\\left( \\dfrac{x y}{z} \\right)',
      '\\ln\\left( \\dfrac{xz^2}{y } \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  {
    type: 'condense',
    problem: '\\log\\left( a \\right) - 2 \\log\\left( b \\right) + \\frac{1}{2} \\log\\left( c \\right)',
    correctAnswer: '\\log\\left( \\dfrac{a c^{1/2}}{b^2} \\right)',
    incorrectAnswers: [
      '\\log\\left( \\dfrac{a}{b^2 c^{1/2}} \\right)',
      '\\log\\left( a - b^2 + c^{1/2} \\right)',
      '\\log\\left( \\dfrac{a c^{1/2}}{b^{-2}} \\right)',
      '\\log\\left( \\dfrac{a c}{b^2} \\right)',
      '\\text{Cannot be condensed}'
    ]
  },
  // More Expand type
  {
    type: 'expand',
    problem: '\\ln\\left( x^2 y^3 \\right)',
    correctAnswer: '2 \\ln x + 3 \\ln y',
    incorrectAnswers: [
      '\\ln\\left( x^2 + y^3 \\right)',
      '5 \\ln\\left( x y \\right)',
      '\\left( 2 \\ln x \\right) \\cdot \\left( 3 \\ln y \\right)',
      '2 \\ln x + \\ln y^3',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_2\\left( \\dfrac{1}{x^3} \\right)',
    correctAnswer: '-3 \\log_2 x',
    incorrectAnswers: [
      '3 \\log_2 x',
      '\\log_2\\left( x^{-3} \\right)',
      '\\dfrac{1}{3} \\log_2 x',
      '- \\dfrac{1}{3} \\log_2 x',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\ln\\left( \\sqrt[3]{a b^2} \\right)',
    correctAnswer: '\\dfrac{1}{3} \\ln a + \\dfrac{2}{3} \\ln b',
    incorrectAnswers: [
      '\\ln a^{1/3} + \\ln b^{2/3}',
      '\\dfrac{1}{3} \\ln a + 2 \\ln b ',
      '\\dfrac{1}{3} \\ln\\left( a b^2 \\right)',
      '\\ln\\left( a^{1/3} b^{2/3} \\right)',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\log_5\\left( x y z \\right)',
    correctAnswer: '\\log_5 x + \\log_5 y + \\log_5 z',
    incorrectAnswers: [
      '\\log_5\\left( x + y + z \\right)',
      '\\log_5 x \\cdot \\log_5 y \\cdot \\log_5 z',
      '\\log_5\\left( x y z \\right)^3',
      '\\left( \\log_5 x + \\log_5 y \\right) \\log_5 z',
      '\\text{Cannot be simplified}'
    ]
  },
  {
    type: 'expand',
    problem: '\\ln\\left( \\dfrac{x^4}{\\sqrt{y}} \\right)',
    correctAnswer: '4 \\ln x - \\dfrac{1}{2} \\ln y',
    incorrectAnswers: [
      '\\dfrac{1}{2} \\ln x^4 - \\ln y',
      '4 \\ln x + \\dfrac{1}{2} \\ln y',
      '\\ln x^4 - \\ln y^{1/2}',
      '\\ln\\left( x^4 - y^{1/2} \\right)',
      '\\text{Cannot be simplified}'
    ]
  }
];


let score = 0;
let previousQuestion = null;
let answered = false;
let questionIndex = 0;
let testingMode = false; // Initialize testingMode to false

// DOM Elements
const modeSelection = document.getElementById('modeSelection');
const testingModeBtn = document.getElementById('testingModeBtn');
const randomModeBtn = document.getElementById('randomModeBtn');
const gameContainer = document.getElementById('gameContainer');
const questionText = document.getElementById('questionText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const optionsContainer = document.getElementById('options');
const scoreSheetBody = document.querySelector('#scoreSheet tbody');
const endGameBtn = document.getElementById('endGameBtn');

// Event Listeners
testingModeBtn.addEventListener('click', () => {
  testingMode = true;
  startGame();
});

randomModeBtn.addEventListener('click', () => {
  testingMode = false;
  startGame();
});

nextQuestionBtn.addEventListener('click', setupQuestion);

endGameBtn.addEventListener('click', endGame);

// Functions
function startGame() {
  // Reset variables
  score = 0;
  questionIndex = 0;
  previousQuestion = null;
  answered = false;
  scoreSheetBody.innerHTML = '';

  // Hide mode selection and show game container
  modeSelection.style.display = 'none';
  gameContainer.style.display = 'flex';

  setupQuestion();
}

function endGame() {
  // Hide game container and show mode selection
  gameContainer.style.display = 'none';
  modeSelection.style.display = 'block';
}

function setupQuestion() {
  let currentQuestion;

  if (testingMode) {
    if (questionIndex >= questions.length) {
      alert('You have completed all the questions.');
      endGame();
      return; // Exit the function
    }
    currentQuestion = questions[questionIndex];
    questionIndex++;
  } else {
    do {
      currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    } while (currentQuestion === previousQuestion && questions.length > 1);
  }

  previousQuestion = currentQuestion;
  answered = false;

  nextQuestionBtn.style.display = 'none';

  if (testingMode) {
    questionText.innerHTML = `DEBUG MODE: ${getInstruction(currentQuestion.type)} \\( ${currentQuestion.problem} \\)`;
  } else {
    questionText.innerHTML = `${getInstruction(currentQuestion.type)} \\( ${currentQuestion.problem} \\)`;
  }

  generateOptions(currentQuestion);
  MathJax.typesetPromise();
}

function getInstruction(type) {
  if (type === 'expand') {
    return 'Expand the logarithm as much as possible:';
  } else if (type === 'condense') {
    return 'Condense into a single logarithm:';
  } else {
    return 'Simplify the logarithmic expression:';
  }
}

function generateOptions(currentQuestion) {
  optionsContainer.innerHTML = '';

  const options = [...currentQuestion.incorrectAnswers];
  options.push(currentQuestion.correctAnswer);
  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = `\\(${option}\\)`;
    button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer, button);
    optionsContainer.appendChild(button);
  });

  MathJax.typesetPromise();
}

function checkAnswer(selectedOption, correctAnswer, button) {
  if (answered) return; // Prevent multiple answers
  answered = true;

  const row = document.createElement('tr');
  const answerCell = document.createElement('td');
  const changeCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  answerCell.innerHTML = `\\(${correctAnswer}\\)`;

  if (selectedOption === correctAnswer) {
    score += 20;
    changeCell.textContent = '+20';
    changeCell.className = 'green';
    button.style.backgroundColor = '#4CAF50'; // Correct answer
  } else {
    score = Math.max(0, score - 5);
    changeCell.textContent = '-5';
    changeCell.className = 'red';
    button.style.backgroundColor = 'red'; // Incorrect answer
  }

  scoreCell.textContent = score;
  scoreCell.className = 'score';
  row.appendChild(answerCell);
  row.appendChild(changeCell);
  row.appendChild(scoreCell);
  scoreSheetBody.appendChild(row);

  // Typeset LaTeX for correct answer
  MathJax.typesetPromise([answerCell]);

  if (scoreSheetBody.rows.length > 8) scoreSheetBody.deleteRow(0); // Keep 8 rows
  nextQuestionBtn.style.display = 'inline'; // Show "Next Question" button
}
