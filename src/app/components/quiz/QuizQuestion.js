import { quizAnswerIsSelected, isLastQuestion, hasSelectedIsRejectionAnswer } from "@/app/utils/questionUtils";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedAnswers, setShowResult, setResultMessage } from '@/app/store/slices/quizSlice';

const QuizQuestion = ({nextStep, successMessage, rejectionMessage }) => {
    const { selectedAnswers, currentQuestionIndex, questions  } = useSelector((state) => state.quiz);
    const dispatch = useDispatch(); 

    if(!questions[currentQuestionIndex]) return null;

    const onAnswerSelect = (option) => {
        const updatedSelectedAnswers = selectedAnswers.filter(answer => answer.questionIndex !== currentQuestionIndex);
        updatedSelectedAnswers.push({questionIndex: currentQuestionIndex, option: option});
        
        dispatch(setSelectedAnswers(updatedSelectedAnswers));
         
        if(option.isRejection) {       
            dispatch(setShowResult(true));
            dispatch(setResultMessage(rejectionMessage));
        } else {
            if(isLastQuestion(currentQuestionIndex, questions.length) && !hasSelectedIsRejectionAnswer(currentQuestionIndex, selectedAnswers)) {
                dispatch(setShowResult(true))
                dispatch(setResultMessage(successMessage));
            } else {
                nextStep();
            }
        }
    }   

    return <div className="flex flex-col text-center justify-center items-center bg-white">
        <div className="my-4 text-[18px] lg:text-[32px] w-[70%]">
            {`Question (${currentQuestionIndex + 1}/${questions.length}): ${questions[currentQuestionIndex].question}`}
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center">
            {
                questions[currentQuestionIndex].options.map((option, index) => {
                    const isSelected = quizAnswerIsSelected(selectedAnswers, currentQuestionIndex, option);
                    return <div 
                        key={`quiz-question-${index}`} 
                        className={`w-[80%] transition duration-150 ease-out hover:ease-in border border-black my-2 hover:scale-105 hover:bg-lime-100 border p-4 rounded ${isSelected ? 'bg-green-100' : 'bg-white'}`} 
                        onClick={() => onAnswerSelect(option)}
                        dangerouslySetInnerHTML={{__html: option.display}}
                    />
                }
                )
            }
        </div>
    </div>
}

export default QuizQuestion;
