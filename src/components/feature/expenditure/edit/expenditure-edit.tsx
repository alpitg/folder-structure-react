import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

/**
 * Rulrbook
 * Sequence 
 * 1. Declate all variables
 * 2. UseEffects 
 * 3. Functions
 * 4. Return html
 * 
 * Function Name - should be in small
 */
export default function EditExpenditure({ item }: any) {


    const [data, setData] = useState<any>([]);

    const [editMode, setEditMode] = useState("");
    const { id } = useParams();


    // const[id,setId] =useState();
    const [selectedId, setSelectedId] = useState();

    //   const [id,setId] = useState([{id }]);
    const [craft, setCraft] = useState([]);
    const [category, setCategory] = useState([]);
    const [operationDate, setOperationDate] = useState('');
    const [totalManpower, setTotalManpower] = useState('');
    const [charges, setCharges] = useState('');
    const [totalCharges, setTotalCharges] = useState('');
    const [craftItemDetails, setCraftItemsDetails] = useState();
    const [selectedCraftId, setSelectedCraftId] = useState<any>();





    const [totalManpowerError, setTotalManpowerError] = useState('');
    const [chargesError, setChargesError] = useState('');
    const [totalChargesError, setTotalChargesError] = useState('');


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
        if (validateTotalManpower() && validateCharges() && validateTotalCharges()) {

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
        getExpenditureDetails(id);
        getAllCraftDetail();
    }, [id]);

    function getAllCraftDetail() {
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
                    setCraftItemsDetails(resp);
                    console.log(resp);
                });
            })
        // .then(resp=>resp.json())
        //  .then(resp=>setCraft(resp))

    }





    // useEffect(() => {
    //     getExpenditureDetails(id);
    // }, [id]);

    function getExpenditureDetails(id: any) {
        fetch(`http://localhost:8080/api/getAllExpenditureDetailsById/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

            }

        })

            .then((result) => {
                result.json().then((resp) => {

                    const responseData = resp;
                    setSelectedCraftId(responseData?.craft?.id);
                    setData((prev: any) => ({ ...prev, id: responseData.id }));
                    setData((prev: any) => ({ ...prev, cultivatedDate: responseData.operationDate }));
                    setData((prev: any) => ({ ...prev, expectedDeliveredDate: responseData.totalManpower }));
                    setData((prev: any) => ({ ...prev, color: responseData.charges }));
                    setData((prev: any) => ({ ...prev, color: responseData.totalCharges }));



                });
            })
            .catch((error) => {
                console.warn(error);
            },);
    }



    function UpdateExpenditureDetails(id: any) {

        if (data) {
            data.craftId = selectedCraftId;

        fetch(`http://localhost:8080/api/updateExpenditureDetailsById/${id}`, {
            method: "PUT",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

            },
            body: JSON.stringify(data),
        })
            .then((response) => { })
            .catch((error) => { });
        // getCultivationDetails(id);

    }



    return (
        <div>
            <div className="border border-danger p-4 m-5  w-75 ">
                <h1 className="text-start">Register Form</h1>
                <br></br>
                <form onSubmit={handleSubmit}>

                    <div className="row">


                        <div className='col-sm-6'>


                            <Dropdown value={craft} onChange={(e) => setCraft(e.target.value)} options={craft} optionLabel="craftName"
                                placeholder="Select a Craft" className="w-full md:w-14rem" />

                        </div>  



                        <div className='col-sm-6'>


                        <Dropdown value={category} onChange={(e) => setCategory(e.target.value)} options={category} optionLabel="categoryName"
                        placeholder="Select a Category" className="w-full md:w-14rem" />

                    </div>                


                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.id}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, id: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.operationDate}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, operationDate: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.totalManpower}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, totalManpower: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.charges}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, charges: e.target.value }))
                                }
                            />
                        </div>


                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.totalCharges}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, totalCharges: e.target.value }))
                                }
                            />
                        </div>

                        <span
                            className="icon"
                            title="Update"
                            onClick={() => UpdateExpenditureDetails(id)}
                        >Update
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </div>

                </form>


            </div>



            {/* <Grid item xs={10} alignItems="flex-end">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => UpdateCultivationDetails(data.id:)}
                >
                        Update
                    </Button>
                </Grid>
            </Grid>
        </Box> */}
        </div >
    );
};
};
