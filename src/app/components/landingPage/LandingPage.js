import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Ed from "./ed/Ed";
import Hair from "./hair/Hair";
import Quiz from "../quiz/Quiz";
import { jsonFile } from "@/app/data";
import { useSelector } from "react-redux";
import { successMessage, rejectionMessage } from "@/app/utils/textUtils";

/* 
/*
    NEXT STEPS: 
    - Set tailwind classes in tailwind configurations (only used tailwind to speed up development);
    - Use propTypes to type check components props or just use typification with typescript
    - Change sizes to use aspect ratios instead of fixed and max dimensions 
    for larger screens in all elements.

    - export reusable classNames into separate reusable
    components, for example: the 1st div after section it's the same
    as the one in the Hair.js component with a small difference, which is, 
    the flex-col and flex-col-reverse that could easily be set using a prop
    or the div that wraps the text "01" and "02" and the text containers;
 -----------------------------------------------------------------------------------------------------------
    here we could use a string url to send as props to quiz, and have an async call in the
    that same component to retrieve and set the store with it (witk rtk create slice we could
    easily use createAsyncThunk from reduxtk or without the store we could always just use fetch api
    axios ajax etc...)
    We could also send a callback or an url to Quiz component and let it be responsible for the data
    retrieval.
    Or retrieving it from server side props. 
*/

const LandingPage = () => {
    const { isQuizOpen } = useSelector((state) => state.quiz);
    const questionList = jsonFile.questions;

    return <>
            <Quiz 
                open={isQuizOpen} 
                questionList={questionList} 
                successMessage={successMessage} 
                rejectionMessage={rejectionMessage}
            />
             <>
                <Hero/>
                <Hair/>
                <Ed/>
                <Footer/>
            </>
        </>;
}

export default LandingPage;