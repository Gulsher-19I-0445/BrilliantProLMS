import MyCards from "../Components/cards";
import AdminNavbar from "../Components/adminNavbar";
import React, { useState, useEffect } from 'react';
import LearnNavbar from "../Components/learnerNav";

export default function LearnrCourseDash(){
  

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const CourseID = window.sessionStorage.getItem("CourseiD")
    console.log(window.sessionStorage.getItem("CourseiD"))
    fetch(`http://localhost:8000/GetCourseByID?CourseID=${CourseID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data)
        console.log(products)
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  }, []);

  
  
  





    return(
        <>
        <LearnNavbar></LearnNavbar>       
        {/* <div class="grid grid-cols-5 gap-2 place-items-center h-18 ..."> */}


                
              <>
                <ul class="grid grid-cols-5 gap-10 place-items-center h-18 ...">
                <li key={products.id}>
          <MyCards mykey= {products.CourseID} name={products.name} desc={products.desc} start={products.start} end={products.end} ></MyCards>
        </li>
      {/* {products.map(product => (
        <li key={product.id}>
          <MyCards mykey= {product.CourseID} name={product.name} desc={product.desc} start={product.start} end={product.end} ></MyCards>
        </li>
      ))} */}
    </ul>
               
              </>

      
      {/* </div> */}
        </>
    )
}