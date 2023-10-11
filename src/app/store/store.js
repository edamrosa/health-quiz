import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/quizSlice'


const store = configureStore({
    reducer: {
        quiz: reducer
    }
});

export default store;