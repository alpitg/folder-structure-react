import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


export default function CreateCategoryDetails() {

  const [data, setData] = useState<any>([]);
  // const [craft, setCraft] = useState([]);

  

  const [categoryName, setCategoryName] = useState('');
  
  // --------validations--------

  const [categoryNameError, setCategoryNameError] = useState('');
  


  const validateCategoryName = () => {
    const categoryNameRegex = /^[A-Za-z]+$/i;
    if (!categoryNameRegex.test(categoryName)) {
      setCategoryNameError("Invalid category name");
      return false;
    }
    setCategoryNameError("");
    return true;
  };




  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateCategoryName() ) {

      console.log('CategoryName:', categoryName);
      



      // Reset the form
      setCategoryName("");
      
    }
  };





  function saveCategory(){
    // console.log({  categoryName });
    // let data = {  categoryName };
    console.log(JSON.stringify(data));
    fetch( "http://localhost:8080/api/category", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }

    useEffect(() => {
      // getById(id);
    },[]);
      function getById(id:any) {
        fetch( `http://localhost:8080/api/getAllCategoryById/${id}`)
          .then((result) => {
            result.json().then((resp) => {
              setData(data);
              // console.log(resp[0].id)
            });
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    
     

  return (
    <div className='border border-danger  p-4 m-5  w-50 '>
      <h1 className='text-start'>Category Details</h1><br></br>

      <form onSubmit={handleSubmit}>

        <div className="row">
          


          <div className='col-sm-6'>

          </div>


          <div className='col-sm-6'>

            <InputText
              id="categoryName"
              placeholder='categoryName'
              value={data?.categoryName}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, categoryName: e.target.value }))
              }
            />
          </div>
          <Button label="Submit" onClick={saveCategory}/>
        </div>
      </form>
    </div>);

 
   
  

};




