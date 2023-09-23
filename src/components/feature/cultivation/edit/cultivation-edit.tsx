import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { ICultivation } from "../../../../interfaces/cultivation.model";
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
export default function EditCultivation({ item }: any) {


    const [data, setData] = useState<ICultivation>();
    const { id } = useParams();

    const [cultivatedDate, setCultivatedDate] = useState('');
    const [expectedDeliveredDate, setExpectedDeliveredDate] = useState('');
    const [color, setColor] = useState('');


    const [idError, setIdError] = useState("");
    const [cultivatedDateError, setCultivatedDateError] = useState("");
    const [expectedDeliveredDateError, setExpectedDeliveredDateError] = useState("");
    const [colorError, setColorError] = useState("");
    const [craftItemDetails, setCraftItemsDetails] = useState();
    const [selectedCraftId, setSelectedCraftId] = useState<any>();


    useEffect(() => {
        getCultivationDetails(id);
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

    function getCultivationDetails(id: any) {
        fetch(`http://localhost:8080/api/getAllCultivationDetailsById/${id}`, {
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
                    setData((prev: any) => ({ ...prev, cultivatedDate: responseData.cultivatedDate }));
                    setData((prev: any) => ({ ...prev, expectedDeliveredDate: responseData.expectedDeliveredDate }));
                    setData((prev: any) => ({ ...prev, color: responseData.color }));

                });
            })
            .catch((error) => {
                console.warn(error);
            },);
    }



    function UpdateCultivationDetails(id: any) {

        if (data) {
            data.craftId = selectedCraftId;

            fetch(`http://localhost:8080/api/updateCultivationDetailsById/${id}`, {
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
    }




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
            setCultivatedDateError("Invalid Cultivation Date");
            return false;
        }
        setCultivatedDateError("");
        return true;
    };

    const validateExpectedDeliveredDate = () => {
        const expectedDeliveredDateRegex = /^[A-Za-z]+$/i;
        if (!expectedDeliveredDateRegex.test(expectedDeliveredDate)) {
            setExpectedDeliveredDateError("Invalid Expected Delivered Date");
            return false;
        }
        setExpectedDeliveredDateError("");
        return true;
    };


    const validateColor = () => {
        const colorRegex = /^[A-Za-z]+$/i;
        if (!colorRegex.test(color)) {
            setColorError("Color is Required");
            return false;
        }
        setColorError("");
        return true;
    };




    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateId() && validateCultivatedDate() && validateExpectedDeliveredDate() && validateColor()) {

            console.log("Id", id);
            console.log('CultivatedDate:', cultivatedDate);
            console.log('ExpectedDeliveredDate:', expectedDeliveredDate);
            console.log('Color:', color);



            // Reset the form
            setCultivatedDate('');
            setExpectedDeliveredDate('');
            setColor('');



        }
    };









    return (
        <div>
            <div className="border border-danger p-4 m-5  w-75 ">
                <h1 className="text-start">Register Form</h1>
                <br></br>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                        {/* <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data.id}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, id: e.target.value }))
                                }
                            />
                        </div> */}
                        <div className='col-sm-6'>

                            <Dropdown value={selectedCraftId} onChange={(e) => setSelectedCraftId(e?.value)}
                                options={craftItemDetails} optionValue="id" optionLabel="craftName"
                                placeholder="Select a City" className="w-full md:w-14rem" />

                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data?.cultivatedDate}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, cultivatedDate: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data?.expectedDeliveredDate}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, expectedDeliveredDate: e.target.value }))
                                }
                            />
                        </div>
                        <div className="col-sm-6">
                            <InputText
                                id="username"
                                value={data?.color}
                                onChange={(e: any) =>
                                    setData((prev: any) => ({ ...prev, color: e.target.value }))
                                }
                            />
                        </div>

                        <span
                            className="icon"
                            title="Update"
                            onClick={() => UpdateCultivationDetails(id)}
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

