import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {useParams} from "react-router-dom";


export default function EditFarmer({ item }: any) {


    const [data, setData] = useState<any>([]);

    const [editMode, setEditMode] = useState("");
    const { id } = useParams();


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


  // --------validations--------

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


  const validateFirstName = () => {
    const firstNameRegex = /^[A-Za-z]+$/i;
    if (!firstNameRegex.test(firstName)) {
      setFirstNameError("Invalid first name");
      return false;
    }
    setFirstNameError("");
    return true;
  };
  const validateMiddleName = () => {
    const middleNameRegex = /^[A-Za-z]+$/i;
    if (!middleNameRegex.test(middleName)) {
      setMiddleNameError("Invalid middle name");
      return false;
    }
    setMiddleNameError("");
    return true;
  };
  const validateLastName = () => {
    const lastNameRegex = /^[A-Za-z]+$/i;
    if (!lastNameRegex.test(lastName)) {
      setLastNameError("Invalid last name");
      return false;
    }
    setLastNameError("");
    return true;
  };
  const validateMobileNo = () => {
    const mobileNoRegex = /^\d{10}$/;
    if (!mobileNoRegex.test(mobileNo)) {
      setMobileNoError("Invalid mobileno number");
      return false;
    }
    setMobileNoError("");
    return true;
  };
  const validateEmailId = () => {
    const emailIdRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailIdRegex.test(emailId)) {
      setEmailIdError("Invalid emailId address");
      return false;
    }
    setEmailIdError("");
    return true;
  };
  const validateAddress1 = () => {
    const address1Regex = /^[A-Za-z]+$/i;
    if (!address1Regex.test(address1)) {
      setAddress1Error("Invalid address1");
      return false;
    }
    setAddress1Error("");
    return true;
  };
  const validateAddress2 = () => {
    const address2Regex = /^[A-Za-z]+$/i;
    if (!address2Regex.test(address2)) {
      setAddress2Error("Invalid address2");
      return false;
    }
    setAddress2Error("");
    return true;
  };
  const validateCity = () => {
    const cityRegex = /^[A-Za-z]+$/i;
    if (!cityRegex.test(city)) {
      setCityError("Invalid City");
      return false;
    }
    setCityError("");
    return true;
  };
  const validateVillage = () => {
    const villageRegex = /^[A-Za-z]+$/i;
    if (!villageRegex.test(village)) {
      setVillageError("Invalid Village");
      return false;
    }
    setVillageError("");
    return true;
  };
  const validateTaluka = () => {
    const talukaRegex = /^[A-Za-z]+$/i;
    if (!talukaRegex.test(taluka)) {
      setTalukaError("Invalid Taluka");
      return false;
    }
    setTalukaError("");
    return true;
  };
 //  const validateState = () => {
 //    const stateRegex = /^[A-Za-z]+$/i;
 //    if (!stateRegex.test(state.id)) {
 //      setStateError('Invalid state');
 //      return false;
 //    }
 //    setStateError('');
 //    return true;
 //  }
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
     
      validateFirstName() &&
      validateMiddleName() &&
      validateLastName() &&
      validateMobileNo() &&
      validateEmailId() &&
      validateAddress1() &&
      validateAddress2() &&
      validateCity() &&
      validateVillage() &&
      validateTaluka()
     //  validateState()
    ) {
     
      console.log("FirstName:", firstName);
      console.log("MiddleName:", middleName);
      console.log("LastName:", lastName);
      console.log("MobileNo:", mobileNo);
      console.log("EmailId:", emailId);
      console.log("Address1:", address1);
      console.log("Address2:", address2);
      console.log("City:", city);
      console.log("Village:", village);
      console.log("Taluka:", taluka);
     //  console.log('State:', state.id);
      // Reset the form
     
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setMobileNo("");
      setEmailId("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setVillage("");
      setTaluka("");
     //  setState([]);
    }
    };



    useEffect(() => {
        getFarmerDetails(id);
      }, [id]);
      function getFarmerDetails(id: any) {
        fetch(`http://localhost:8080/api/getAllFarmersById/${id}`,
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
                }
        )
          .then((result) => {
            result.json().then((resp) => {
              // setData(data+id);
              // console.log(resp);
              // console.log(resp[0].id);
    
              const responseData = resp;
              console.log(responseData);
              setData((prev: any) => ({ ...prev, id: responseData.id }));
              setData((prev: any) => ({ ...prev, firstName: responseData.firstName }));
              setData((prev: any) => ({ ...prev, middleName: responseData.middleName }));
              setData((prev: any) => ({ ...prev, lastName: responseData.lastName }));
              setData((prev: any) => ({ ...prev, mobileNo: responseData.mobileNo }));
              setData((prev: any) => ({ ...prev, emailId: responseData.emailId }));
              setData((prev: any) => ({ ...prev, address1: responseData.address1 }));
              setData((prev: any) => ({ ...prev, address2: responseData.address2 }));
              setData((prev: any) => ({ ...prev, city: responseData.city }));
              setData((prev: any) => ({ ...prev, village: responseData.village }));
              setData((prev: any) => ({ ...prev, taluka: responseData.taluka }));
            });
          })
          .catch((error) => {
            console.warn(error);
          },);
      }
    

      function UpdateFarmerById(id: any) {

        fetch(`http://localhost:8080/api/updateFarmerById/${id}`, {
          method: "PUT",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

          },
          body: JSON.stringify(data),
        })
          .then((response) => {})
          // props.refreshList();
          .catch((error) => {});
           getFarmerDetails(id);
      }
    
    
      

  

    return (
        <div>
            <div className="border border-danger p-4 m-5  w-75 ">
                <h1 className="text-start">Register Form</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
        <div className="row">
        <div className='col-sm-6'>
           <InputText
            id="firstName"
            placeholder='firstName'
            value={data?.firstName}
            onChange={(e: any) =>
            setData((prev: any) => ({ ...prev, firstName: e.target.value }))
          }
          />
        </div>
        <div className='col-sm-6'>
          <InputText
           id="middleName"
           placeholder='middleName'
           value={data?.middleName}
           onChange={(e: any) =>
           setData((prev: any) => ({ ...prev, middleName: e.target.value }))
            }
          />
        </div>
        <div className='col-sm-6'>
          <InputText
           id="lastName"
           placeholder='lastName'
           value={data?.lastName}
           onChange={(e: any) =>
           setData((prev: any) => ({ ...prev, last: e.target.value }))
            }
            />
        </div>
        <div className='col-sm-6'>
           <InputText
             id="mobileNo"
             placeholder='mobileNo'
             value={data?.mobileNo}
             onChange={(e: any) =>
            setData((prev: any) => ({ ...prev, mobileNo: e.target.value }))
            }
          />
        </div>
        <div className='col-sm-6'>
           <InputText
            id="emailId"
            placeholder='emailId'
            value={data?.emailId}
            onChange={(e: any) =>
           setData((prev: any) => ({ ...prev, emailId: e.target.value }))
            }
          />
        </div>
        <div className='col-sm-6'>
           <InputText
            id="address1"
            placeholder='address1'
            value={data?.address1}
           onChange={(e: any) =>
           setData((prev: any) => ({ ...prev, address1: e.target.value }))
           }
          />
        </div>
        <div className='col-sm-6'>
          <InputText
            id="address2"
            placeholder='address2'
            value={data?.address2}
            onChange={(e: any) =>
            setData((prev: any) => ({ ...prev, address2: e.target.value }))
           }
          />
        </div>
        <div className='col-sm-6'>
          <InputText
            id="city"
            placeholder='city'
            value={data?.city}
            onChange={(e: any) =>
            setData((prev: any) => ({ ...prev, city: e.target.value }))
           }
          />
       </div>
        <div className='col-sm-6'>
          <InputText
            id="village"
            placeholder='village'
            value={data?.village}
            onChange={(e: any) =>
            setData((prev: any) => ({ ...prev, village: e.target.value }))
           }
          />
        </div>
        <div className='col-sm-6'>
              <InputText
                id="taluka"
                placeholder='taluka'
                value={data?.taluka}
                onChange={(e: any) =>
                setData((prev: any) => ({ ...prev, taluka: e.target.value }))
               }
          />
        </div>
                        <span
                            className="icon"
                            title="Update"
                            onClick={() =>UpdateFarmerById(id)}
                        >Update
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </div>

                </form>

             </div>

            </div>

    );
};