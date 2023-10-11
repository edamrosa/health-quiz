import { createSlice } from "@reduxjs/toolkit";

export const quizStoreInitialState = {
    isQuizOpen: false,
    selectedAnswers: [],
    currentQuestionIndex: 0,
    questions: [],
    resultMessage: "",
    showResult: false,
    loading: false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState: quizStoreInitialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setCurrentQuestionIndex: (state, action) => {
            state.currentQuestionIndex = action.payload;
        },
        setQuizIsOpen: (state, action) => {
            state.isQuizOpen = action.payload;
        },
        setShowResult: (state, action) => {
            state.result = action.payload;
        },
        setSelectedAnswers: (state, action) => {
            state.selectedAnswers = action.payload
        },
        setInitialState: (state, action) => {
            state.currentQuestionIndex = quizStoreInitialState.currentQuestionIndex;
            state.showResult = quizStoreInitialState.showResult;
            state.resultMessage = quizStoreInitialState.resultMessage;
            state.selectedAnswers = quizStoreInitialState.selectedAnswers;
            state.isQuizOpen = quizStoreInitialState.isQuizOpen;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setResultMessage: (state, action) => {
            state.resultMessage = action.payload;
        },
        setShowResult: (state, action) => {
            state.showResult = action.payload;
        }
    }
});

export const { actions} = quizSlice;

export const { 
    setQuizIsOpen, 
    setCurrentQuestionIndex, 
    setSelectedAnswers, 
    setQuestions, 
    setInitialState,
    setLoading,
    setShowResult,
    setResultMessage
} = actions;

export default quizSlice.reducer;