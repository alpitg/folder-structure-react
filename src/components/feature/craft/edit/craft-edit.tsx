import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function EditCraft({ item }: any) {


    const [data, setData] = useState<any>([]);

    const [editMode, setEditMode] = useState("");
    const { id } = useParams();

     
   
    const [craftName, setCraftName] = useState("");
    

    const [craftNameError, setCraftNameError] = useState("");
   
   
    const validateCraftName = () => {
        const craftNameRegex = /^[A-Za-z]+$/i;
        if (!craftNameRegex.test(craftName)) {
          setCraftNameError("Invalid craft name");
          return false;
        }
        setCraftNameError("");
        return true;
      };
    
    

      const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateCraftName() ) {
          console.log('CraftName:', craftName);
          

          // Reset the form
          setCraftName("");
          
        }
    }



    useEffect(() => {
        getCraftDetaildById(id);
       },[id]);
        function getCraftDetaildById(id:any) {
          fetch( `http://localhost:8080/api/getAllCraft${id}`)
            .then((result) => {
              result.json().then((resp) => {
                // setData(resp);
                // console.log(resp);
                // console.log(resp[0].id)

                const responseData = resp;
                console.log(responseData);
                setData((prev: any) => ({ ...prev, craftName: responseData.craftName }));
               
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
    

          function UpdateCraft(id:any)
          {
            
              fetch(`localhost:8080/api/updateCraftById/${id}`, {
                method: 'PUT',
                
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                
              })
                .then(response => {})
                .catch(error => {
                 getCraftDetaildById(id);
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
                            id="craftName"
                            placeholder='craftName'
                            value={data?.craftName}
                            onChange={(e: any) =>
                           setData((prev: any) => ({ ...prev, craftName: e.target.value }))
                          }
                      />
                 </div>           
                        <span
                            className="icon"
                            title="Update"
                            onClick={() => UpdateCraft(id)}
                        >Update
                            <i className="pi pi-fw pi-times"></i>
                        </span>
                    </div>

                </form>


            </div>

        </div >
    );
};

