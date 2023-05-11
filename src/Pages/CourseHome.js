import React, { useState } from "react";
import AdminNavbar from "../Components/adminNavbar";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CourseHome(route) {
  const location = useLocation();
  const { CourseID,name,desc,start,end } = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcement,setannouce]=useState();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
  
    fetch('http://localhost:8000', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // do something with the response data, like close the modal and refresh the page
    })
    .catch(error => {
      console.error('Error:', error);
      // handle the error, like showing an error message to the user
    });
  }

 
  return (
    <>
      <AdminNavbar />
      <div className="min-h-full">
        <header className="bg-white shadow ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {CourseID+'  '+name}
            </h1>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 mt-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              Add announcement
            </button>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <form>
          <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Make an announcement</label>
          <div class="mt-2">
            <textarea id="about" name="desc" rows="3"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <button
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 mt-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              Add announcement
            </button>
            <button
              onClick={closeModal}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 mt-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              Close
            </button>
        </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
