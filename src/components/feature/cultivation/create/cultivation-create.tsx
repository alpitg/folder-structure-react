import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';







export default function CreateCultivationDetails() {

  const [data, setData] = useState<any>([]);
  const [craft, setCraft] = useState([]);

  // const[cultivatedDate,setCultivatedDate] = useState('');

  const [id, setId] = useState();
  const [cultivatedDate, setCultivatedDate] = useState('');
  const [expectedDeliveredDate, setExpectedDeliveredDate] = useState('')
  const [color, setColor] = useState('');

  // --------validations--------

  const [idError, setIdError] = useState("");
  const [cultivatedDateError, setCultivatedDateError] = useState('');
  const [expectedDeliveredDateError, setExpectedDeliveredDateError] = useState('');
  const [colorError, setColorError] = useState('');


  const validateId = () => {
    const idRegex = /^\d{2}$/;
    if (!idRegex.test(id ? "" : "")) {
      setIdError("Invalid id");
      return false;
    }
    setIdError("");
    return true;
  };
  const validateCultivatedDate = () => {
    const cultivatedDateRegex = /^[A-Za-z]+$/i;
    if (!cultivatedDateRegex.test(cultivatedDate)) {
      setCultivatedDateError('Invalid Date');
      return false;
    }
    setCultivatedDateError('');
    return true;
  }


  const validateExpectedDeliveredDate = () => {
    const expectedDeliveredDateRegex = /^[A-Za-z]+$/i;
    if (!expectedDeliveredDateRegex.test(expectedDeliveredDate)) {
      setExpectedDeliveredDateError('Invalid Date');
      return false;
    }
    setExpectedDeliveredDateError('');
    return true;
  }



  const validateColor = () => {
    const colorRegex = /^[A-Za-z]+$/i;
    if (!colorRegex.test(color)) {
      setColorError('Invalid color');
      return false;
    }
    setColorError('');
    return true;
  }




  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateCultivatedDate() && validateExpectedDeliveredDate() && validateColor()) {

      console.log('CultivatedDate:', cultivatedDate);
      console.log('ExpectedDeliveredDate:', expectedDeliveredDate);
      console.log('Color:', color);



      // Reset the form
      setCultivatedDate('');
      setExpectedDeliveredDate('');
      setColor('');



    }
  };





  // data.use(cors());
  useEffect(() => {
    fetch(`http://localhost:8080/api/getAllCraft`,
      {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // 'Content-Security-Policy': 'default-src https://localhost:8080',
          // 'Access-Control-Allow-Credentials': true,

          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'
        }
      })
      .then((result) => {
        result.json().then((resp) => {
          setCraft(resp);


          console.log(resp);
        });
      })
    // .then(resp=>resp.json())
    //  .then(resp=>setCraft(resp))



  }, [])



  function saveCultivationDetails() {
    // console.log({ cultivatedDate, expectedDeliveredDate, color });
    // let data = { cultivatedDate, expectedDeliveredDate, color }
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/api/cultivationDetails", {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("results", result);
    })
  }





  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     {


  //       console.log('Craft:', craft);

  //     }
  // };  

  // const [selectCraft,setSelectCraft] = useState('');

  // const handleSelect=(e)=>{
  //   console.log(e);
  //   setCraft(e)
  // }
  const [selectedCity, setSelectedCity] = useState(null);









  return (
    <div className='border border-danger  p-4 m-5  w-50 '>
      <h1 className='text-start'>Cultivation Details</h1><br></br>

      <form onSubmit={handleSubmit}>

        <div className="row">
          {/* <div className="col-sm-6">
            <InputText
              id="id"
              value={data?.id}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, id: e.target.value }))
              }
            />

          </div> */}


          <div className='col-sm-6'>


            <Dropdown value={craft} onChange={(e) => setCraft(e.target.value)} options={craft} optionLabel="craftName"
              placeholder="Select a City" className="w-full md:w-14rem" />

          </div>


          <div className='col-sm-6'>

            <InputText
              id="cultivatedDate"
              placeholder='cultivatedDate'
              value={data?.cultivatedDate}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, cultivatedDate: e.target.value }))
              }
            />

          </div>




          <div className='col-sm-6'>

            <InputText
              id="expectedDeliveredDate"
              placeholder='expectedDeliverd date'
              value={data?.expectedDeliveredDate}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, expectedDeliveredDate: e.target.value }))
              }
            />
          </div>

          <div className='col-sm-6'>

            <InputText
              id="color"
              placeholder='color'
              value={data?.color}
              onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, color: e.target.value }))
              }
            />
          </div>

          <Button label="Submit" icon="pi pi-check" onClick={saveCultivationDetails} iconPos="right" />

        </div>
      </form>
    </div>);

  {/* <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={6}>
       
        <Grid item xs={6}>
        <TextField
          select
          label="*Craft"
        >
          {craft.map((option) => (
            <MenuItem value={option.id} onChange={(e)=>setCraft(e.target.value)}>
              {option.craftName}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
       
        </Grid>
        <Grid item xs={12} alignItems='flex-center'>
        <Button  type="submit" variant="contained" color="primary" onClick={saveCultivationDetails} >
          Submit
        </Button>
       
        </Grid>
      </Grid>
        </Box>
    
     
    </form>
    </div>
   
  ); */}

};




