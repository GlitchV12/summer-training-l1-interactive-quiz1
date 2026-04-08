const snippets = [
  {
    code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    explanation: 'Single loop through array = O(n). No extra space used = O(1).'
  },
  {
    code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    explanation: 'Halving search space each iteration = O(log n). Constant variables = O(1).'
  },
  {
    id: 3,
    code: `function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    explanation: 'Nested loop, each running n times = n × n = O(n²). No extra space = O(1).'
  },
  {
    id: 4,
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    timeComplexity: 'O(2^n)',
    spaceComplexity: 'O(n)',
    explanation: 'Each call spawns 2 more calls = exponential tree. Call stack depth = O(n).'
  },
  {
    id: 5,
    code: `function matrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}`,
    timeComplexity: 'O(n × m)',
    spaceComplexity: 'O(1)',
    explanation: 'Nested loops: n rows × m columns = O(n × m). One variable = O(1).'
  },
  {
    id: 6,
    code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    explanation: 'Double nested loop = O(n²). In-place sorting = O(1) space.'
  },
  {
    id: 7,
    code: `function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    explanation: 'Single loop = O(n). New array of size n = O(n) space.'
  },
  {
    id: 8,
    code: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    explanation: 'One pass through array = O(n). Single variable = O(1).'
  },
  {
    id: 9,
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    explanation: 'Divide array log n times, merge n elements each level = O(n log n). Temporary arrays = O(n).'
  },
  {
    id: 10,
    code: `function hasDuplicate(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    explanation: 'Single loop with O(1) set operations = O(n). Set stores up to n elements = O(n).'
  },
  {
    id: 11,
    code: `function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    explanation: 'Nested loops checking all pairs = O(n²). No extra data structures = O(1).'
  },
  {
    id: 12,
    code: `function quickSelect(arr, k) {
  if (arr.length === 1) return arr[0];
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  if (k < left.length) return quickSelect(left, k);
  if (k < left.length + mid.length) return mid[0];
  return quickSelect(right, k - left.length - mid.length);
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    explanation: 'Average case: eliminate half each time = O(n). Filter creates new arrays = O(n) space.'
  }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const timeSelect = document.getElementById('time-select');
const spaceSelect = document.getElementById('space-select');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const statusText = document.getElementById('status-text');
const timerValue = document.getElementById('timer-value');
const codeBlock = document.getElementById('code-block');
const snippetResult = document.getElementById('snippet-result');
const answerFeedback = document.getElementById('answer-feedback');
const finalScore = document.getElementById('final-score');
const endFeedback = document.getElementById('end-feedback');

function updateStatus() {
  statusText.textContent = `Question ${currentIndex + 1} / ${snippets.length}`;
}

function showSnippet() {
  const snippet = snippets[currentIndex];
  codeBlock.textContent = snippet.code;
  timeSelect.value = '';
  spaceSelect.value = '';
  snippetResult.classList.add('hidden');
  answerFeedback.classList.add('hidden');
  nextBtn.classList.add('hidden');
  submitBtn.disabled = false;
  updateStatus();
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
  shuffleSnippets();
  currentIndex = 0;
  score = 0;
  showScreen('question-screen');
  showSnippet();
  startTimer();
}

function loadQuestion() {
  const snippet = snippets[currentIndex];
  codeBlock.textContent = snippet.code;
  updateStatus();
  timeSelect.value = '';
  spaceSelect.value = '';
  snippetResult.classList.add('hidden');
  answerFeedback.classList.add('hidden');
  answered = false;
  submitBtn.disabled = false;
  nextBtn.classList.add('hidden');
}

function startTimer() {
  timeLeft = 15;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeoutAnswer();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerValue.textContent = timeLeft;
}

function checkAnswer() {
  const selectedTime = timeSelect.value;
  const selectedSpace = spaceSelect.value;
  const snippet = snippets[currentIndex];

  if (!selectedTime || !selectedSpace) {
    answerFeedback.textContent = 'Please select both complexities before submitting.';
    answerFeedback.classList.remove('hidden');
    return;
  }

  clearInterval(timerInterval);
  answered = true;

  let correct = 0;
  if (selectedTime === snippet.timeComplexity) correct++;
  if (selectedSpace === snippet.spaceComplexity) correct++;

  score += correct;

  const message = `You got ${correct}/2 correct.
Time: ${selectedTime} (${selectedTime === snippet.timeComplexity ? '✓' : '✗ ' + snippet.timeComplexity})
Space: ${selectedSpace} (${selectedSpace === snippet.spaceComplexity ? '✓' : '✗ ' + snippet.spaceComplexity})

${snippet.explanation}`;

  snippetResult.innerHTML = message;
  snippetResult.classList.remove('hidden');
  answerFeedback.classList.add('hidden');
  submitBtn.disabled = true;
  nextBtn.classList.remove('hidden');
}

function timeoutAnswer() {
  answered = true;
  snippetResult.innerHTML = 'Time is up! Moving to next question...';
  snippetResult.classList.remove('hidden');
  submitBtn.disabled = true;
  nextBtn.classList.remove('hidden');
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.classList.remove('hidden', 'error', 'success');
  feedback.classList.add(type);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= snippets.length) {
    showScreen('end-screen');
    finalScore.textContent = score;
    endFeedback.textContent = `You answered ${score} out of ${snippets.length * 2} complexity fields correctly.`;
  } else {
    showSnippet();
    startTimer();
  }
}

function restartQuiz() {
  score = 0;
  currentIndex = 0;
  showScreen('question-screen');
  showSnippet();
  startTimer();
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
