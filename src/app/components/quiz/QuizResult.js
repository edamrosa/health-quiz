import { useSelector } from "react-redux";

const QuizResult = () => {
    const { resultMessage } = useSelector((state) => state.quiz);

    return <div className="my-4 text-[18px] lg:text-[32px] w-[70%]">
        Result: {resultMessage}
    </div>;
}

export default QuizResult;