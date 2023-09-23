import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function EditCategory({ item }: any) {


    const [data, setData] = useState<any>([]);

    const [editMode, setEditMode] = useState("");
    const { id } = useParams();

     
   
    const [categoryName, setCategoryName] = useState("");
    

    const [categoryNameError, setCategoryNameError] = useState("");
   
   
    const validateCategoryName = () => {
        const categoryNameRegex = /^[A-Za-z]+$/i;
        if (!categoryNameRegex.test(categoryName)) {
          setCategoryNameError("Invalid category name");
          return false;
        }
        setCategoryNameError("");
        return true;
      };
    
    

      const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateCategoryName() ) {
          console.log('CraftName:', categoryName);
          

          // Reset the form
          setCategoryName("");
          
        }
    }



    useEffect(() => {
        getCategoryDetaildById(id);
       },[]);
        function getCategoryDetaildById(id:any) {
          fetch( `http://localhost:8080/api/getAllCategory`,
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
                // setData(resp);
                // console.log(resp);
                // console.log(resp[0].id)

                const responseData = resp;
                console.log(responseData);
                setData((prev: any) => ({ ...prev, categoryName: responseData.categoryName }));
               
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
    

          function UpdateCategory(id:any)
          {
              fetch(`localhost:8080/api/updateCategoryById/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU'

                },
                body: JSON.stringify(data) 
              })
                .then(response => {})
                .catch(error => {
                 getCategoryDetaildById(id);
                }); 
          }
        
        //   const updateMethod = (value)=>{
        //     setData({...data, firstName: value});
        //   }
        //   console.log(updateMethod)
    

    
    
    return (
        <div>
            <div className="border border-danger p-4 m-5  w-75 ">
                <h1 className="text-start">Register Form</h1>
                <br></br>
                <form onSubmit={handleSubmit}>

                    <div className="row">
                    <div className='col-sm-6'>

                       <InputText
                            id="categoryName"
                            placeholder='categoryName'
                            value={data?.craftName}
                            onChange={(e: any) =>
                           setData((prev: any) => ({ ...prev, categoryName: e.target.value }))
                          }
                      />
                 </div>           
                        <span
                            className="icon"
                            title="Update"
                            onClick={() => UpdateCategory(id)}
                        >Update
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </div>

                </form>


            </div>

        </div >
    );
};

