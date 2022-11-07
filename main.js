const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

//Находим элементы
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

//Переменные игры
let score = 0;//Количество правильных ответов
let questionIndex = 0;//текущий вопрос

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;


function clearPage() {
	headerContainer.innerHTML = '';//сброс заголовка при помощи назначения на разметку пустой строки
	listContainer.innerHTML = '';
}


function showQuestion() {
	console.log('showQuestion');
	
	// Вопрос
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;//Запись сгенерированной разметки внутрь контейнера

	//Варианты ответов
				let answerNumber = 1;
				for (answerText of questions[questionIndex]['answers']) {// Перебор лишних вопросов
					console.log(answerNumber, answerText);
					const questionTemplate =
					`<li>
						<label>
							<input value = "%number%" type="radio" class="answer" name="answer" />
							<span>%answer%</span>
					</label>
					</li>`;

				const answerHTML = questionTemplate
																		.replace('%answer%', answerText)	
																		.replace('%number%',answerNumber) 

				listContainer.innerHTML += answerHTML; //= listContainer.innerHTML + answerHTML
				answerNumber++;
	}


}	

function checkAnswer(){
	console.log('checkAnswer started!');

	//Находим выбранную радио кнопку
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
	console.log(checkedRadio);

	if (!checkedRadio) {
		submitBtn.blur();
		return
	}//Если ответ не выбран ничего не делаем выходим из функции
	//то же самое
	// if (checkedRadio) {
	// 	console.log('OK');
	// } else {
	// 	submitBtn.blur();
	// 	return;
	// }
}