import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FarmersApp from '../farmer';
import { ROUTE_URL } from '../../../auth/constants/routes.const';
import FarmerItemApp from './item/farmer-item';



export default function FarmerListApp() {

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [emailId, setEmailId] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [village, setVillage] = useState('')
  const [taluka, setTaluka] = useState('')

  
  const [data, setData] = useState<any>([]);
  const [idError, setIdError] = useState("");
  const [firstNameError, setFirstNameError] = useState('');
  const [middleNameError, setMiddleNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [mobileNoError, setMobileNoError] = useState('')
  const [emailIdError, setEmailIdError] = useState('')
  const [address1Error, setAddress1Error] = useState('')
  const [address2Error, setAddress2Error] = useState('')
  const [cityError, setCityError] = useState('')
  const [villageError, setVillageError] = useState('')
  const [talukaError, setTalukaError] = useState('')


  useEffect(() => {
    getAllFarmers();
    // deleteFarmer();
  }, []);
  function getAllFarmers() {
    fetch(`http://localhost:8080/api/getAllFarmers`,{
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

      }
    })
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
          console.log(resp);
          // console.log(resp[0].id);
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

     function deleteFarmer(id: any) {
    fetch(`http://localhost:8080/api/deleteFarmerById/${id}`, {
      method: "DELETE",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

      },
    })
        .then((result) => {
            getAllFarmers();
        });
    
  }

  
    

    return (
        <div>

            {Array.isArray(data)
                ? data?.map((item: any) => {
                    return <div key={item.id}>
                        <FarmerItemApp item={item} refreshList={getAllFarmers}/>
                    </div>
                })
                : null}
        </div>
    );
};