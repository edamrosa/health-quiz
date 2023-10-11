import { useDispatch } from "react-redux";
import { setQuizIsOpen } from "@/app/store/slices/quizSlice";

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
*/


const Hero = () => {
    const dispatch = useDispatch();

    const openQuiz = () => {
        dispatch(setQuizIsOpen(true));
    }

    return <section className="w-full h-max-[750px] bg-[url('/BG.png')] bg-auto bg-cover bg-center bg-no-repeat w-max-[1440px]">
        <div className="flex items-center w-full max-w-[1440px] mx-auto justify-center md:justify-start
            md:h-full md:md-auto">
            <div className="flex-1 my-[100px] text-center max-w-[468px] text-[#0B3B3C] my-[12px] 
                md:text-left md:my-[189px] md:ml-[138px]">
                <div className="mb-5 text-[90px] font-bold tracking-tight 
                    md:leading-[90px] md:mb-[20px]">
                    Be good <br/> to yourself
                </div>
                <div className="text-[18px] my-[40] max-w-[468px] mb-[50px] md:mb-[20px]">
                    We’re working around the clock to bring you a holistic approach to your wellness. 
                    From top to bottom, inside and out.</div>
                <button className='py-[15px] px-[30px] text-[10px] trackig-widest leading-[15px] text-white bg-[#7E0707]'
                    onClick={openQuiz}
                >
                    TAKE THE QUIZ
                </button>
            </div>
        </div>
    </section>
}


export default Hero;