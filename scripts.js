function showAnswer(answerId) {
    // Сначала скрываем все ответы
    var answers = document.getElementsByClassName('answer');
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = 'none';
    }

    // Показываем выбранный ответ
    var answer = document.getElementById(answerId);
    answer.style.display = 'block';
}
