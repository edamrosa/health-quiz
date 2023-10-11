"use client" 

import PropTypes from "prop-types";
import { useEffect, useMemo } from 'react';
import QuizResult from './QuizResult';
import QuizQuestion from './QuizQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuestionIndex, setInitialState, setQuestions, setShowResult } from '@/app/store/slices/quizSlice';
import { quizQuestionIsAnswered, isLastQuestion } from '@/app/utils/questionUtils';

/*
    More familiar with just react than using the NEXT framework;
    in the case of a simple flag, the best global store tool to use would be Context API, for this case mobx would be a possible
    simple solution, however, i've used redux-toolkit as it is also easy to setup and configure the store and just like raw redux
    it fits better for more complex applications (unlike this one). 
    For this exercise there's simpler alternatives to using a state management tool;
*/

const Quiz = ({questionList, open, successMessage, rejectionMessage}) => {
    const { currentQuestionIndex, selectedAnswers, showResult, resultMessage, questions } = useSelector((state) => state.quiz); 
    const dispatch = useDispatch();

    //only used this useEffect to simulate the retrieval of data, for example from an API
    //on that case we could play with a loading variable to render a loading component while
    //the data hasn't been retrieved yet.
    useEffect(() => {
        dispatch(setQuestions(questionList));
        /*  
            dispatch(setLoading(true))
            fetch(url).then((data) => {
                dispatch(setQuestions(data.questions))
                dispatch(setLoading(false))
            })
        */
    },[questionList])

    const previousStep = () => {
        console.log("HERE");
        console.log(showResult)
        if(showResult) {
            dispatch(setShowResult(false));
        } else {
            dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
        }
    }   

    const nextStep = () => {
        if(isLastQuestion(currentQuestionIndex, questionList.length) && quizQuestionIsAnswered(selectedAnswers, currentQuestionIndex)) {
            dispatch(setShowResult(true));
        } else {
            dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
        }
    }

    const nextDisabled = useMemo(() => !quizQuestionIsAnswered(selectedAnswers, currentQuestionIndex) || showResult, [currentQuestionIndex, showResult]);
    const prevDisabled = useMemo(() => currentQuestionIndex === 0 && !showResult, [currentQuestionIndex, showResult]);
    
    const onQuizClose = () => { 
        dispatch(setInitialState(false));
    };

    if(!open || !questionList) return;


    return <div className="z-20 fixed top-0 left-0 w-full h-full min-h-[full] bg-white text-black">
            <button onClick={onQuizClose} className="fixed z-40 top-[20px] right-[20px] p-[20px]">
                GO BACK
            </button>
            <div className="overflow-auto max-h-full">
                { showResult ? 
                    <QuizResult 
                        message={resultMessage}
                    /> :
                    <QuizQuestion 
                        question={questions[currentQuestionIndex]} 
                        nextStep={nextStep} 
                        totalQuestions={questions.length}
                        rejectionMessage={rejectionMessage}
                        successMessage={successMessage}
                    />
                }
                <div className="text-[40px]">
                    <button 
                        className="float-left mx-[20px] py-[25px]" 
                        disabled={prevDisabled} 
                        onClick={previousStep}>Prev
                    </button>
                    <button 
                        className="float-right mx-[20px] py-[25px]" 
                        disabled={nextDisabled} 
                        onClick={nextStep}>Next
                    </button>
                </div>       
            </div>
        </div>
}

export default Quiz;

