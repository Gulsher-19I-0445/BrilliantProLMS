import React, { useState } from "react";
import AdminNavbar from "../Components/adminNavbar";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CourseHome(route) {
  const location = useLocation();
  const { name } = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcement,setannouce]=useState();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(learnerData)
//     axios.post('http://localhost:8000/addCourse', announcment)
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//   };

//   const handleChange = (e) => {
//     //console.log(e.target.value)
//     setannouce({e.name:e.value});
//   };
  return (
    <>
      <AdminNavbar />
      <div className="min-h-full">
        <header className="bg-white shadow ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {name}
            </h1>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 mt-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              Add course
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
          <p class="mt-3 text-sm leading-6 text-gray-600">Enter announcement</p>
        </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
