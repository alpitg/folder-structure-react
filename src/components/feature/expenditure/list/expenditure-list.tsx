import React, { useState, useEffect, useReducer } from 'react';
import ExpenditureItemApp from './item/expenditure-item';



export default function ExpenditureListApp() {


    const [data,setData] = useState<any>([]);
    const [id, setId] = useState();
      const[craft, setCraft] = useState([]);
      const [category, setCategory] = useState([]);
      const [operationDate, setOperationDate] = useState('');
      const [totalManpower, setTotalManpower] = useState('');
      const [charges, setCharges] = useState('');
      const [totalCharges, setTotalCharges] = useState('');

    useEffect(() => {
        getAllExpenditureDetails();
    }, []);

    function getAllExpenditureDetails() {

        fetch(`http://localhost:8080/api/getAllExpenditureDetails`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

            }
        })
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp);
                    console.log(resp);
                    // console.log(resp[0].id)

                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }




    

    function deleteCultivationDetails(id: any) {
        fetch(`http://localhost:8080/api/deleteCultivationDetailsById/${id}`, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

            }
        })
            .then((result) => {
                getAllExpenditureDetails();
            });

    }

    return (
        <div>

            {Array.isArray(data)
                ? data?.map((item: any) => {
                    return <div key={item.id}>
                        <ExpenditureItemApp item={item} refreshList={getAllExpenditureDetails} />
                    </div>
                })
                : null}
        </div>
    );
};
