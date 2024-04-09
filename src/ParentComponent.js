import React, { useState, useEffect } from 'react';
import FirstForm from './FormComponents/FirstForm.js';
import SecondForm from './FormComponents/SecondForm.js';
import ThirdForm from './FormComponents/ThirdForm.js';
import FourthForm from './FormComponents/FourthForm.js';
import FifthForm from './FormComponents/FifthForm.js';
import Loading from './Loading';
import LastPage from './LastPage';

const ParentComponent = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm", "FourthForm", "FifthForm"];
  const formLength = formList.length;

  const [page, setPage] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [selectedItems, setSelectedItems] = useState(Array(formLength).fill(null));
  const [showLoading, setShowLoading] = useState(false);
  const [showLastPage, setShowLastPage] = useState(false);

  useEffect(() => {
    if (selectedItems.every(item => item !== null)) {
      setProgressWidth((page + 1) * (100 / formLength));
    }
  }, [selectedItems, page, formLength]);

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);

  const handleNext = () => {
    if (page === formLength - 1) {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setPage(0);
        setProgressWidth(0);
        setSelectedItems(Array(formLength).fill(null));
      }, 5000);
      setShowLastPage(true);
    } else if ((page === 2 && selectedItems[page] !== null) || selectedItems[page] !== null) {
      setPage(prevPage => prevPage + 1);
      setProgressWidth(prevWidth => prevWidth + (100 / (formLength - 1)));
    }
  };

  const handlePrev = () => {
    if (page === 0) {
      setPage(formLength - 1);
      setProgressWidth(100);
    } else {
      setPage(prevPage => prevPage - 1);
      setProgressWidth(prevWidth => prevWidth - (100 / (formLength - 1)));
    }
  };

  const handleSelection = (item) => {
    setSelectedItems(prevItems => {
      const newItems = [...prevItems];
      newItems[page] = item;
      return newItems;
    });

    if (page !== 2) {
      const button = document.querySelector('.continue-button');
      if (button) {
        button.classList.remove('bg-gray-300');
        button.classList.add('bg-black', 'hover:bg-zinc-800');
      }
    }
  };

  const handleForms = () => {
    switch (page) {
      case 0:
        return <FirstForm selectedItem={selectedItems[0]} handleSelection={handleSelection} />;
      case 1:
        return <SecondForm selectedItemSecondForm={selectedItems[1]} handleSelectionSecondForm={handleSelection} />;
      case 2:
        return <ThirdForm selectedItemThirdForm={selectedItems[2]} handleSelectionThirdForm={handleSelection} />;
      case 3:
        return <FourthForm selectedItemFourthForm={selectedItems[3]} handleSelectionFourthForm={handleSelection} />;
      case 4:
        return <FifthForm selectedItemFifthForm={selectedItems[4]} handleSelectionFifthForm={handleSelection} />;
      default:
        return null;
    }
  };

  if (showLoading) {
    return <Loading />;
  }
  if (showLastPage) {
    return <LastPage />;
  }
  return (
    <>
      <div className="my-5 mx-[10rem] flex items-center">
        {page !== 0 && (
          <button
            onClick={handlePrev}
            className="text-black font-bold text-lg rounded-full p-1 self-center hover:text-gray-600"
          >
            &lt;
          </button>
        )}
        <div className="h-2 bg-gray-300 rounded-full my-4  flex-1">
          <div
            className="h-full bg-[#189B7C] rounded-full"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1">{handleForms()}</div>

      <div className="flex justify-center my-4">
        <button
          onClick={() => {
            if (page === formLength - 1) {
              handleNext();
            } else {
              setPage(prevPage => prevPage + 1);
              setProgressWidth(prevWidth => prevWidth + (100 / (formLength - 1)));
            }
          }}
          disabled={page === 2 || page === 4 ? false : selectedItems[page] === null}
          className={`group relative w-40 py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white ${
            page === 2 || page === 4 || selectedItems[page] !== null ? 'bg-black' : 'bg-gray-400'
          } continue-button`}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ParentComponent;
