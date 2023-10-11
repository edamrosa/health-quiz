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


const Ed = () => {
    return <section className="relative w-full h-auto lg:h-[625px] justify-center">
        <div className="flex flex-col justify-center items-center items-center h-auto lg:flex-row lg:-ml-[">
            <div className="flex items-center justify-center my-[36px] lg:my-0 lg:w-[561px] lg:h-[445px]">
                
                <div className="text-[#F3F7F4] font-bold text-[300px] tracking-tight
                    md:text-[450px] lg:w-full leading-[450px] lg:ml-[30px]">
                    02
                </div>          
                
                <div className="absolute w-full lg:px-0 flex-1 max-w-[359px] max-h-[257px] text-black text-center 
                    lg:w-full lg:text-left lg:-ml-[110px]">
                    
                    <div className="text-[#0B3B3C] text-[36px] mb-[10px] lg:text-[10px] lg:leading-[15px] tracking-widest">
                        ERECTYLE DISFUNCTION
                    </div>

                    <div className="text-[#0B3B3C] text-[28px] mb-[22px] lg:text-[28px] lg:leading-[40px] tracking-tight">
                        Erections can be a tricky<br/>thing. But no need to feel down!
                    </div>
                    
                    <div className="text-[#0B3B3C] text-[24px] lg:text-[18px] lg:leading-[30px]">
                        We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                    </div>

                </div>
            </div>
            <img src="/Photo2.png" alt="" className="p-[20px] my-[40px] z-10 w-full max-w-[370px] lg:my-0 lg:p-0 lg:-ml-[90px]"/>
        </div>
    </section>
}

export default Ed;
