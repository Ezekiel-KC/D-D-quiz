document.addEventListener('DOMContentLoaded', function() {
    const startQuizBtn = document.getElementById('startQuiz');
    const quizContainer = document.getElementById('quizContainer');
    let score = 0;



    startQuizBtn.addEventListener('click', function() {
        const welcomeMessage = document.getElementById('welcomeMessage')
        const testerInput = document.getElementById('tester');
        const tester = document.getElementById('tester').value;
        const year = document.getElementById('year').value;
        const quizTaker = new QuizTaker(tester, year);
        if (testerInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        welcomeMessage.textContent = `Welcome! ${quizTaker.tester} from year ${quizTaker.year} to this quiz about D&D`;
    });

    const checkAnswerButtons = document.querySelectorAll('[id^="checkAnswer"]');
    checkAnswerButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            const questionNumber = index + 1;
            const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
            if (!selectedAnswer) {
                alert('Please select an answer.');
                return;
            }
            const feedback = document.getElementById(`feedback${questionNumber}`);
            if (selectedAnswer.value === '1') {
                feedback.textContent = 'Correct';
                score++;
                // Increment score
            } else {
                feedback.textContent = 'Incorrect';
            }
        });
    });

       class QuizTaker {
        constructor(tester, year) {
            this.tester = tester;
            this.year = year;
        }
    }

    const endQuizBtn = document.getElementById('endQuiz');
    const finalFeedback = document.getElementById('finalFeedback');
    endQuizBtn.addEventListener('click', function() {
        const tester = document.getElementById('tester').value;
        const year = document.getElementById('year').value;
        const quizTaker = new QuizTaker(tester, year);
        // Hide the quiz container
        quizContainer.style.display = 'none';
        // Display the final feedback
        finalFeedback.textContent = `Congratulations ${quizTaker.tester} for completing the year ${quizTaker.year} quiz! Your score is ${score}/10.`;
    });
});