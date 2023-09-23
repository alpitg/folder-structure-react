import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import CategoryApp from '../category';
import { ROUTE_URL } from '../../../auth/constants/routes.const';
import CategoryItemApp from './item/category-item';



export default function CategoryListApp() {


    const [data, setData] = useState<any>([]);
    const [categoryName, setCategoryName] = useState('');
    

    useEffect(() => {
        getCategoryDetaildById();
       },[]);
        function getCategoryDetaildById() {
          fetch( `http://localhost:8080/api/getAllCategory`)
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
    
    
        function deleteCategory(id:any) {
          fetch(`http://localhost:8080/api/deleteCategoryById/${id}`, {
            method: 'DELETE'
          }).then((result) => {
            getCategoryDetaildById()
          });
        }
      
       

    return (
        <div>

            {Array.isArray(data)
                ? data?.map((item: any) => {
                    return <div key={item.id}>
                        <CategoryItemApp item={item} refreshList={getCategoryDetaildById} />
                    </div>
                })
                : null}
        </div>
    );
};
