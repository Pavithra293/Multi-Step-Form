import React from 'react'

const SecondForm = ({ selectedItemSecondForm, handleSelectionSecondForm }) => {
 
  
 const handleClick = (item) => {
    handleSelectionSecondForm(item);
  };

  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full
     space-y-8">
			<div>
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Which are you most interested in?
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Choose just ane. This will help us get you started (but won't limit your experience)
				</p>
			</div>

			<div classNameName="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">

				
	<div id="buttonGroup" className="flex flex-col gap-2">
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300rounded shadow mb-2 ${ selectedItemSecondForm === "Leraning" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Leraning",event)}
              onClick={() => handleClick("Learning")}>
    <img src="learn.png" alt="Icon" className="mr-2 h-10 w-10" /> Learning specific skills to advance my career
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300rounded shadow mb-2 ${selectedItemSecondForm === "Exploring" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("Exploring")} >
    <img src="explore.png" alt="Icon" className="mr-2 h-10 w-10"/> Exploring new topics I'm interested in
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300rounded shadow mb-2 ${selectedItemSecondForm === "Refreshing" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("Refreshing")} >
   <img src="refresh.png" alt="Icon" className="mr-2 h-10 w-10" /> Refreshing my math foundations
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300rounded shadow mb-2 ${selectedItemSecondForm === "Exercising" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("Exercising")} >
    <img src="exercise.png" alt="Icon" className="mr-2 h-10 w-10"/> Exercising my brain to stay sharp
 </button>
  <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300rounded shadow mb-2 ${selectedItemSecondForm === "Something" ? "border-yellow-400" : ""}`}
              onClick={() => handleClick("Something")} >
    <img src="something.png" alt="Icon" className="mr-2 h-10 w-10"/> Or Something else
  </button>
  
</div>

		</div>
	</div>
  </div>
</div>
  )
}

export default SecondForm
