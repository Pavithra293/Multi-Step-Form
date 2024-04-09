
const FourthForm = ({ selectedItemFourthForm, handleSelectionFourthForm }) => {
  const isOverflowing = (element) => {
    return element.scrollHeight > element.clientHeight;
  };

  const handleClick = (item) => {
    handleSelectionFourthForm(item);
  };

  return (
      <div>
      <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl w-full ">
			<div>
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Which are you most interested in?
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Choose just ane. This will help us get you started (but won't limit your experience)
				</p>
			</div>

          <div className={`rounded bg-white p-5 ${isOverflowing ? 'overflow-y-auto' : ''}`}>

				
	<div id="buttonGroup" className="flex flex-row  gap-3 ">
              <button type="button" className={` shadow-xl groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded mb-2 w-[50rem] h-[12rem] ${selectedItemFourthForm === "M1" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("M1")}>
                <div className="w-full flex flex-col items-center gap-2 justify-center">
                 <img src='m1.png' className='w-[7rem]'></img>
                  <div className="mt-4">
                    <span className="text-black">Arithmetic</span>
                    <br />
                    <span className="text-sm">Introductory</span>
                  </div>
                </div>
               
  </button>
 <button type="button" className={`shadow-xl groupButton flex items-center text-gray-700 transition-transform transform-gpu hover:scale-105 py-4 px-4 border border-gray-300 rounded  mb-2  w-[50rem] h-[12rem] ${selectedItemFourthForm === "M2" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("M2")}
               ><div className="w-full flex flex-col items-center gap-2 justify-center">
                  <img src='m2.png' className='w-[7rem] py-2'></img>
                  <div className="mt-4">
                    <span className="text-black">Basic Algebra</span>
                    <br />
                    <span className="text-sm">Foundational</span>
                  </div>
                </div>
  </button>
 <button type="button" className={` shadow-xl groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded  mb-2 w-[50rem] h-[12rem] ${selectedItemFourthForm === "M3" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("M3")}
               ><div className="w-full flex flex-col items-center gap-2 justify-center">
                  <img src='m3.png' className='w-[7rem] py-2'></img>
                  <div className="mt-4">
                    <span className="text-black">Intermediate Algebra</span>
                    <br />
                    <span className="text-sm">Intermediate</span>
                  </div>
                </div>
  </button>
 <button type="button" className={`shadow-xl groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded  mb-2 w-[50rem] h-[12rem] ${selectedItemFourthForm === "M4" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("M4")}
              ><div className="w-full flex flex-col items-center gap-2 justify-center">
                  <img src='m3.png' className='w-[7rem] py-2'></img>
                  <div className="mt-4">
                    <span className="text-black">calculus</span>
                    <br />
                    <span className="text-sm">Advanced</span>
                  </div>
                </div>
                </button>

  
</div>

		</div>
	</div>
  </div>
</div>
  )
}

export default FourthForm
