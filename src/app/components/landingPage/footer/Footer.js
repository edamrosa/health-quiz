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



const Footer = () => {
    return <section className="w-full h-auto justify-center bg-[#E8EFE9] lg:flex-row">
        <div className="w-full flex flex-col md:flex-row md:justify-end md:relative">
            <div className="md:w-[37%]">
                <img className="ml-[50px] w-[75px] h-[75px] md:ml-[138px] mt-[68px] md:abolute" src="symbol.svg"/>
            </div>
            <div className="grid grid-cols-1 gap-x-[25px] text-[#0B3B3C] text-[28px] 
                sm:grid-cols-2 md:grid-cols-3 sm:text-[16px] md:mr-[136px] md:mt-[73px] md:mr-[136px] md:w-[54%] lg:grid-cols-4">
                <div className="my-[40px] text-center md:text-left lg:my-0">
                    <div className="lg:mt-0 font-[700] text-[10px] tracking-widest leading-[15px]">PRODUCT</div>
                    <div className="my-[20px] leading-[30px]">Popular</div>
                    <div className="my-[20px] leading-[30px]">Trending</div>
                    <div className="my-[20px] leading-[30px]">Guided</div>
                    <div className="my-[20px] leading-[30px]">Products</div>
                </div>
                <div className="my-[40px] text-center md:text-left lg:my-0">
                    <div className="lg:mt-0 font-bold text-[10px] tracking-widest leading-[15px]">COMPANY</div>
                    <div className="my-[20px] leading-[30px]">Press</div>
                    <div className="my-[20px] leading-[30px]">Mission</div>
                    <div className="my-[20px] leading-[30px]">Strategy</div>
                    <div className="my-[20px] leading-[30px]">About</div>
                </div>
                <div className="my-[40px] text-center md:text-left lg:my-0">
                    <div className="lg:mt-0 font-bold text-[28px] md:text-[10px] tracking-widest leading-[15px]">INFO</div>
                    <div className="my-[20px] leading-[30px] ">Support</div>
                    <div className="my-[20px] leading-[30px]">Customer Service</div>
                    <div className="my-[20px] leading-[30px]">Get Started</div>
                </div>
                <div className="my-[40px] text-center md:text-left lg:my-0">
                    <div className="lg:mt-0 font-bold text-[10px] tracking-widest leading-[15px] mb-[20px]">FOLLOW US</div>
                    <div className="flex flex-row justify-center items-center text-center lg:justify-start lg:items-start">
                        <div className="justify-center items-center">
                            <img className="mr-[40px]" src="logo-fb-simple.svg" alt=""/>
                        </div>
                        <div className="justify-center items-center"> 
                            <img className="mr-[40px]" src="google.svg" alt=""/>
                        </div>
                        <div className="justify-center items-center">
                            <img src="twitter.svg" alt=""/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-auto md:flex md:justify-center md:items-center text-left text-[#6D8A83] text-[16px] text-center md:mt-[72px]">
            <div className="py-[25px] md:w-[80%] md:border-solid md:border-t-[#BDCDC5] md:border-t">
                © 2021 Manual. All rights reserverd
            </div>
        </div>
    </section>
}

export default Footer;