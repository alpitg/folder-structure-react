import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import CultivationApp from '../cultivation';
import { ROUTE_URL } from '../../../auth/constants/routes.const';
import CultivationItemApp from './item/cultivation-item';



export default function CultivationListApp() {


    const [data, setData] = useState<any>([]);
    const [id, setId] = useState('');
    const [craft, setCraft] = useState();
    const [cultivatedDate, setCultivatedDate] = useState('');
    const [expectedDeliverdDate, setExpectedDeliverdDate] = useState('');
    const [color, setColor] = useState('');


    useEffect(() => {
        getAllCultivationDetails();
    }, []);

    function getAllCultivationDetails() {

        fetch(`http://localhost:8080/api/getAllCultivationDetails`, {
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
                getAllCultivationDetails();
            });

    }

    return (
        <div>

            {Array.isArray(data)
                ? data?.map((item: any) => {
                    return <div key={item.id}>
                        <CultivationItemApp item={item} refreshList={getAllCultivationDetails} />
                    </div>
                })
                : null}
        </div>
    );
};
