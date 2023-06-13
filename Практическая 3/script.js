// Сохраняем имя пользователя в localStorage при нажатии на кнопку "Сохранить имя"
const saveNameButton = document.getElementById('save-name');
saveNameButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input');
    localStorage.setItem('username', nameInput.value);
    
    // Скрываем кнопку и поле ввода
    saveNameButton.style.display = 'none';
    nameInput.style.display = 'none';
});

// Заполняем поле для имени пользователя, если оно было сохранено ранее
const savedUsername = localStorage.getItem('username');
if (savedUsername) {
    const nameInput = document.getElementById('name-input');
    nameInput.value = savedUsername;
    
    // Скрываем кнопку и поле ввода
    saveNameButton.style.display = 'none';
    nameInput.style.display = 'none';
	const greetingElement = document.getElementById('greeting');
    greetingElement.style.display = 'none';
}

    // Показываем/скрываем решение задачи при нажатии на кнопку "Показать решение"/"Скрыть решение"
	    const showResultButton = document.getElementById('show-result');
    const hideResultButton = document.getElementById('hide-result');
    const resultOverlay = document.querySelector('.fullscreen');

    showResultButton.addEventListener('click', () => {
        resultOverlay.style.display = 'flex';
    });

    hideResultButton.addEventListener('click', () => {
        resultOverlay.style.display = 'none';
    });	

    // Показываем заставку при нажатии на кнопку "Показать заставку"
    const showOverlayButton = document.getElementById('show-overlay');
    const fullscreenContent = document.querySelector('.fullscreen-content');

    showOverlayButton.addEventListener('click', () => {
        fullscreenContent.innerHTML = `
            <p>Привет, <span>${localStorage.getItem('username') || 'гость'}</span>!</p>
            <p>Сегодня ${new Date().toLocaleDateString()}</p>
        `;
        resultOverlay.style.display = 'flex';
    });

    // Закрываем заставку при нажатии на любое место экрана
    resultOverlay.addEventListener('click', () => {
        resultOverlay.style.display = 'none';
    });

    // Пройти тест
    const questions = [
        {
            question: 'Что такое JavaScript?',
            options: ['Язык программирования', 'Музыкальный инструмент', 'Компьютерная игра', 'Арабский напиток'],
            correctAnswer: 0
        },
        {
            question: 'Как объявить переменную в JavaScript?',
            options: ['let x = 5;', 'variable x = 5;', 'x = 5;', 'var x = 5;'],
            correctAnswer: 0
        },
        {
            question: 'Что означает оператор === в JavaScript?',
            options: ['Строгое равенство', 'Нестрогое равенство', 'Присваивание', 'Отрицание'],
            correctAnswer: 0
        },
        {
            question: 'Какая функция используется для вывода сообщения в консоль браузера?',
            options: ['console.log', 'alert', 'prompt', 'confirm'],
            correctAnswer: 0
        },
        {
            question: 'Какие значения можно использовать в качестве условия в конструкции if?',
            options: ['Любые логические значения', 'Только true', 'Только false', 'Только числа'],
            correctAnswer: 0
        },
        {
            question: 'Как называется оператор, который возвращает первое истинное значение из списка переменных?',
            options: ['Оператор ||', 'Оператор &&', 'Оператор !', 'Оператор ? :'],
            correctAnswer: 0
        },
        {
            question: 'Как добавить элемент в конец массива в JavaScript?',
            options: ['array.push(element)', 'array.unshift(element)', 'array.pop()', 'array.shift()'],
            correctAnswer: 0
        },
        {
            question: 'Как удалить последний элемент из массива в JavaScript?',
            options: ['array.pop()', 'array.push(element)', 'array.shift()', 'array.unshift(element)'],
            correctAnswer: 0
        },
        {
            question: 'Какая функция используется для повторения действий в цикле?',
            options: ['for', 'if', 'while', 'switch'],
            correctAnswer: 0
        },
        {
            question: 'Что означает ключевое слово "return" в функции JavaScript?',
options: ['Возвращает значение из функции', 'Завершает выполнение функции', 'Переходит к следующему шагу в цикле', 'Ничего не делает'],
correctAnswer: 0
}
];

    const passTestButton = document.getElementById('pass-test');

    passTestButton.addEventListener('click', () => {
        let score = 0;
        const answers = [];
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const answerIndex = prompt(question.question + '\n\n' + question.options.join('\n'));
            const selectedOption = Number(answerIndex);
            answers.push(selectedOption);
            if (selectedOption === question.correctAnswer) {
                score++;
            }
        }

        const answerStrings = answers.map((answer, index) => {
            return `Вопрос ${index + 1}: ${answer === questions[index].correctAnswer ? 'верно' : 'неверно'}`;
        });

        const resultString = `Вы ответили на ${score} из ${questions.length} вопросов верно.\n\n${answerStrings.join('\n')}`;

        alert(resultString);
    });