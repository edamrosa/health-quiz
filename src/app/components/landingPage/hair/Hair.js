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


const Hair = () => {
    return <section className="relative w-full h-auto lg:h-[735px] justify-center">
        <div className="text-center text-[#0B3B3C] text-[40px] my-[70px] tracking-tight h-[60px]">
           What we can help with
        </div>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row h-auto lg:-ml-[57px]">   
            <img src="/Photo.png" alt="" className="p-[20px] my-[40px] z-10 w-full max-w-[370px] lg:my-0 lg:p-0"/>
            
            <div className="flex items-center text-center justify-center lg:w-[480px] lg:h-[445px]">

                <div className="text-[#F3F7F4] font-bold text-[300px] tracking-tight
                md:text-[450px] leading-[450px] lg:w-full lg:-ml-[213px]">
                  01
                </div>

                <div className="absolute w-full lg:px-0 flex-1 max-w-[372px] max-h-[217px] text-black text-center 
                    lg:ml-[142px] lg:w-[372px] lg:text-left">
                    <div className="text-[#0B3B3C] text-[36px] mb-[10px] lg:text-[10px] lg:leading-[15px] tracking-widest">
                        HAIR LOSS
                    </div>
                    <div className="text-[#0B3B3C] text-[28px] mb-[22px] lg:text-[28px] lg:leading-[40px] tracking-tight">
                        Hair loss needn’t be<br/> irreversible. We can help! 
                    </div>
                    <div className="text-[#0B3B3C] text-[24px] lg:text-[18px] lg:leading-[30px]">
                        We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                    </div>  
                </div>
            </div>
        </div>
    </section>

}

export default Hair;
