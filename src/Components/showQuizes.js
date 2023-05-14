import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Quiz = () => {
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
    axios.get('http://localhost:8000/getMCQ')
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
        <h2>{selectedSurvey && selectedSurvey.title}</h2>
        {selectedSurvey && (
          <form>
            {selectedSurvey.questions.map((question, index) => (
              <div key={index}>
                <h3>{question.text}</h3>
                {question.options.map((option, index) => (
                  <div key={index}>
                    <input type="checkbox" name={option.value} checked={option.checked} />
                    <label>{option.text}</label>
                  </div>
                ))}
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Quiz;
