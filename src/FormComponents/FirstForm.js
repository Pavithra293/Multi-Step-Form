// import { useState } from 'react';

const FirstForm = ({selectedItem ,handleSelection}) => {

  
  const handleClick = (item) => {

    handleSelection(item); // Call the handleSelection function with the selected item
  };

   

  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full
     space-y-8">
			<div>
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Which describes you best?
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					This will help us personalize your experience
				</p>
			</div>

			<div classNameName="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">

				
				<div id="buttonGroup" className="flex flex-col gap-2">
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Student" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Student",event)}>
    <img src="student.png" alt="Icon" className="mr-2 h-10 w-10" /> <p><b>Student </b> or soon to be enrolled</p> 
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Professional" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Professional",event)}>
    <img src="proffes.png" alt="Icon" className="mr-2 h-10 w-10"/> <p><b>Professional </b> pursuing a career</p>
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Parent" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Parent",event)}>
    <img src="parent.png" alt="Icon" className="mr-2 h-10 w-10"/> <p><b>Parent </b> of a school-age child</p>
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Learner" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Learner",event)}>
    <img src="listen.png" alt="Icon" className="mr-2 h-10 w-10"/> <p><b>Lifelong learner </b></p>
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Teacher" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Teacher",event)}>
    <img src="teacher.png" alt="Icon" className="mr-2 h-10 w-10"/> <p><b>Teacher</b></p>
  </button>
 <button type="button" className={`groupButton flex items-center transition-transform transform-gpu hover:scale-105 text-gray-700 py-4 px-4 border border-gray-300 rounded shadow mb-2 ${ selectedItem === "Other" ? "border-yellow-400" : "" }`} onClick={(event) => handleClick("Other",event)}>
    <img src="other.png" alt="Icon" className="mr-2 h-10 w-10"/> <p><b>Other</b></p>
  </button>
  
</div>

		</div>
	</div>
  </div>
</div>
  )
}

export default FirstForm;
