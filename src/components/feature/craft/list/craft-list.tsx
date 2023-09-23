import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import CraftApp from '../craft';
import { ROUTE_URL } from '../../../auth/constants/routes.const';
import CraftItemApp from './item/craft-item';



export default function CraftListApp() {


    const [data, setData] = useState<any>([]);
    const [craftName, setCraftName] = useState('');
    

    useEffect(() => {
        getCraftDetaildById();
       },[]);
        function getCraftDetaildById() {
          fetch( `http://localhost:8080/api/getAllCraft`)
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
    
    
        function deleteCraft(id:any) {
          fetch(`http://localhost:8080/api/deleteCraftById/${id}`, {
            method: 'DELETE'
          }).then((result) => {
            getCraftDetaildById()
          });
        }
      
       

    return (
        <div>

            {Array.isArray(data)
                ? data?.map((item: any) => {
                    return <div key={item.id}>
                        <CraftItemApp item={item} refreshList={ getCraftDetaildById} />
                        
                    </div>
                })
                : null}
        </div>
    );
};
