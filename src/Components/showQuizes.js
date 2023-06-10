import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Quiz = (props) => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/getMCQ?Course=${props.courseD}`)
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey);
    openModal();
  }

  return (
    <div>
      {surveys.map((survey, index) => (
        <div key={survey.title}>
          
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <ul role="list" className="divide-y divide-gray-100">
              <button className="flex justify-between gap-x-6 py-5 shadow-md w-full rounded-lg" onClick={() => handleSurveyClick(survey)}>
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="m-1 truncate text-xs leading-5 text-black">{survey.title}</p>
                  </div>
                </div>
              </button>
            </ul>
          </div>
        </div>
      ))}
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <h2 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">{selectedSurvey && selectedSurvey.title}</h2>
        {selectedSurvey && (
          <form>
            {selectedSurvey.questions.map((question, index) => (
              <div key={index}>
                <h1 className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">{question.text}</h1>
                {question.options.map((option, index) => (
                  <div key={index}>
                    <input type="checkbox" name={option.value} checked={option.checked} />
                    <label>{option.text}</label>
                  </div>
                ))}
              </div>
            ))}
            <button className="-flex items-inlinecenter justify-center rounded-md p-2 text-gray-700 my-4 bg-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" type="submit">Submit</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Quiz;
