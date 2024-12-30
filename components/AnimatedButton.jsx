import React from 'react'

function AnimatedButton({onClick}) {
  return (
    <button onClick={onClick} className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#A00201] border-2 border-[#A00201] rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#A00201] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">Explore</span>
            </button>
  )
}

export const NeuButton = ({onClick, text="Explore"}) => {
  return (
      <button  onClick={onClick} className="px-6 py-2 font-medium bg-[#A00201] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {text}
      </button>
  );
};



export default AnimatedButton


// E40601