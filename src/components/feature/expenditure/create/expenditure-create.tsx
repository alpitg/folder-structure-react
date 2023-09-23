import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';




export default function CreateExpenditure  () {

 const handleChange = (e :any) => {
  const {value} = e.target;
  console.log({value});
  setSelectedId(value);
  // console.log(e.target.value);
};


const [selectedId,setSelectedId] = useState();

const [data,setData] = useState<any>([]);
//   const [id,setId] = useState([{id }]);
const [id, setId] = useState();
  const[craft, setCraft] = useState([]);
  const [category, setCategory] = useState([]);
  const [operationDate, setOperationDate] = useState('');
  const [totalManpower, setTotalManpower] = useState('');
  const [charges, setCharges] = useState('');
  const [totalCharges, setTotalCharges] = useState('');
  
  const [craftError, setCraftError] = useState('');
  const [operationDateError, setOperationDateError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [totalManpowerError, setTotalManpowerError] = useState('');
  const [chargesError, setChargesError] = useState('');
  const [totalChargesError, setTotalChargesError] = useState('');
  

//   const validateCraft = () => {
//     const craftRegex = /^[A-Za-z]+$/i;
//     if (!craftRegex.test(craft)) {
//       setCraftError('Invalid Craft');
//       return false;
//     }
//     setCraftError('');
//     return true;
//   }


//   const validateCategory = () => {
//     const categoryRegex = /^[A-Za-z]+$/i;
//     if (!categoryRegex.test(category)) {
//       setCategoryError('Invalid Category');
//       return false;
//     }
//     setCategoryError('');
//     return true;
//   }

 
  const validateTotalManpower = () => {
    const totalManpowerRegex = /^\d{1}$/;
    if (!totalManpowerRegex.test(totalManpower)) {
      setTotalManpowerError('Invalid Total Manpower');
      return false;
    }
    setTotalManpowerError('');
    return true;
  }
  const validateCharges = () => {
    const chargesRegex = /^\d{3}$/;
    if (!chargesRegex.test(charges)) {
      setChargesError('Invalid Charges');
      return false;
    }
    setChargesError('');
    return true;
  }
  const validateTotalCharges = () => {
    const totalChargesRegex = /^\d{3}$/;
    if (!totalChargesRegex.test(totalCharges)) {
      setChargesError('Invalid Total Charges');
      return false;
    }
    setTotalChargesError('');
    return true;
  }
 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateTotalManpower()&& validateCharges()&&  validateTotalCharges () ) {
      
    //   console.log('Craft:', craft);
      console.log('OperationDate:', operationDate);
    //   console.log('Category:',category);
      console.log('TotalManpower:', totalManpower);
      console.log('Charges', charges);
      console.log('TotalCharges:', totalCharges);
      
      // Reset the form
      
    //   setCraft('');
      setOperationDate('');
    //   setCategory('');
      setTotalManpower('');
      setCharges('');
      setTotalCharges('');
     
     
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/getAllCraft`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          

          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU',
        }
      })
      .then((result) => {
        result.json().then((resp) => {
          setCraft(resp);
          console.log(resp);
        });
      })
  
  }, [])


        useEffect(()=>{
          fetch(`http://localhost:8080/api/getAllCategory`,
          {
            method:'Get',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU',

            }
          })
          .then((result) => {
            result.json().then((resp) => {
              setCategory(resp);
              console.log(resp);
            });
          })
        },[])

   function saveExpenditureDetails(){
    // console.log({ operationDate,totalManpower,charges,totalCharges});
    // let data={operationDate,totalManpower,charges,totalCharges}
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/api/expenditureDetails",{
        method:"POST",
        headers:{
            'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU',

        },
        body:JSON.stringify(data)
    }).then((result)=>{
        console.warn("results",result);
    })
  }



//   useEffect(() => {
//     getById(id);
//   },[]);
//     function getById(data: any) {
//       fetch( `http://localhost:8080/api/getAllExpenditureDetailsById/${id}`)
//         .then((result) => {
//           result.json().then((resp) => {
//             setData(data);
//             console.log(resp[0].id)
//           });
//         })
//         .catch((error) => {
//           console.warn(error);
//         });
//     }


  return (
    <div className='border border-danger  p-4 m-5  w-50 '>
      <h1 className='text-start'>Expenditure Details</h1><br></br>

    <form onSubmit={handleSubmit}>


                    <div className='col-sm-6'>


                      <Dropdown value={craft} onChange={(e) => setCraft(e.target.value)} options={craft} optionLabel="craftName"
                       placeholder="Select a Craft" className="w-full md:w-14rem" />

                     </div>



                     <div className='col-sm-6'>


                        <Dropdown value={category} onChange={(e) => setCategory(e.target.value)} options={category} optionLabel="categoryName"
                        placeholder="Select a Category" className="w-full md:w-14rem" />

                    </div>




            <div className='col-sm-6'>

               <InputText
                     id="operationDate"
                     placeholder='operationDate'
                     value={data?.operationDate}
                     onChange={(e: any) =>
                      setData((prev: any) => ({ ...prev, operationDate: e.target.value }))
                   }
                />

              </div>



                  <div className='col-sm-6'>

                    <InputText
                           id="totalManpower"
                           placeholder='totalManpower'
                           value={data?.totalManpower}
                           onChange={(e: any) =>
                           setData((prev: any) => ({ ...prev, totalManpower: e.target.value }))
                         }
                     />

                  </div>


            <div className='col-sm-6'>

                <InputText
                       id="charges"
                       placeholder='charges'
                       value={data?.charges}
                       onChange={(e: any) =>
                       setData((prev: any) => ({ ...prev, charges: e.target.value }))
                    }
                 />

             </div>


                    <div className='col-sm-6'>

                         <InputText
                             id="totalCharges"
                             placeholder='totalCharges'
                             value={data?.totalCharges}
                             onChange={(e: any) =>
                              setData((prev: any) => ({ ...prev, totalCharges: e.target.value }))
                            }
                          />

                    </div>



                    <Button label="Submit" icon="pi pi-check" onClick={saveExpenditureDetails} iconPos="right" />


                    {/* <Button  type="submit" variant="contained" color="primary" onClick={saveExpenditureDetails} >
                         Submit
                    </Button> */}
    
     
    
     
       </form>
    </div>
   
  );
    
};

