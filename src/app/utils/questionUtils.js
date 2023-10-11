export const quizAnswerIsSelected = (selectedAnswers, currentQuestionIndex, option) => {
    return selectedAnswers.some(answer => {
        return answer.questionIndex === currentQuestionIndex && 
        answer.option.value === option.value});
}

export const quizQuestionIsAnswered = (selectedAnswers, currentQuestionIndex) => {
    return selectedAnswers?.some(answer => answer.questionIndex === currentQuestionIndex);
}

export const isLastQuestion = (currentQuestionIndex, questionsNumber) => {
    return currentQuestionIndex === questionsNumber - 1;
}

export const hasSelectedIsRejectionAnswer = (currentQuestionIndex, selectedAnswers) => {
    return selectedAnswers.some(answer => answer.isRejected);
}