import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';



export default function CreateCraftDetails() {

  const [data, setData] = useState<any>([]);
  // const [craft, setCraft] = useState([]);

  

  const [craftName, setCraftName] = useState('');
  
  // --------validations--------

  const [craftNameError, setCraftNameError] = useState('');
  


  const validateCraftName = () => {
    const craftNameRegex = /^[A-Za-z]+$/i;
    if (!craftNameRegex.test(craftName)) {
      setCraftNameError("Invalid craft name");
      return false;
    }
    setCraftNameError("");
    return true;
  };




  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateCraftName() ) {

      console.log('CraftName:', craftName);
      



      // Reset the form
      setCraftName("");
      
    }
  };





  function saveCraft(){
    // console.log({  craftName });
    // let data = {  craftName };
    console.log(JSON.stringify(data));
    fetch( "http://localhost:8080/api/craft", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
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
        fetch( `http://localhost:8080/api/getAllCraftById/${id}`)
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
      <h1 className='text-start'>Craft Details</h1><br></br>

      <form onSubmit={handleSubmit}>

        <div className="row">
          


          <div className='col-sm-6'>

          </div>


          <div className='col-sm-6'>

            <InputText
              id="craftName"
              placeholder='craftName'
              value={data?.craftName}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, craftName: e.target.value }))
              }
            />
          </div>
          <Button label="Submit" onClick={saveCraft}/>
        </div>
      </form>
    </div>);

 
   
  

};




