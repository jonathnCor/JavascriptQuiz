// Questions that will be asked
const Questions = [{
	q: "How many strings does a guitar have?",
	a: [{ text: "7", isCorrect: false },
	{ text: "4", isCorrect: false },
	{ text: "6", isCorrect: true },
	{ text: "5", isCorrect: false }
	]

},
{
	q: "What is the order of the guitar strings?",
	a: [{ text: "EBGADE", isCorrect: false, isSelected: false },
	{ text: "GBEEAD", isCorrect: false },
	{ text: "DEAGBE", isCorrect: false },
	{ text: "EADGBE", isCorrect: true }
	]

},
{
	q: "How many notes are in a scale?",
	a: [{ text: "13", isCorrect: false },
	{ text: "6", isCorrect: false },
	{ text: "12", isCorrect: true },
	{ text: "5", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
