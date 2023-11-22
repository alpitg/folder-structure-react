import { Card } from "primereact/card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { TabPanel, TabView } from "primereact/tabview";
import { useEffect, useState } from "react";
import { FacilityTypeFormModel, FacilityTypeModel} from "../../../../../../interfaces/facilityType.model";
import { InputText } from "primereact/inputtext";
import SaveLoaderButtonApp from "../../../../../ui/save-loader-button/save-loader-button";
import { minimumCharValidation } from "../../../../../../utils/validation.util";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import {
    fetchFacilityTypeRequest,
      fetchFacilityTypesRequest, 
      updateFacilityTypeRequest 
    } from "../../store/actions/facilityType.action";

const FacilityTypeEditApp = () => {
  
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tenants } = useSelector((x: AppState) => x.administration);
    const facilityTypeUpdate = useSelector((x: AppState) => x.gymkhana.facilityType.update)

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [facilityTypeDetail, setFacilityTypeDetail] = useState<FacilityTypeFormModel>(
        new FacilityTypeFormModel()
    );
    const { isError, fieldName } = facilityTypeDetail;

    useEffect(() => {
        if (id) {
          dispatch(fetchFacilityTypesRequest(id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        if (!facilityTypeUpdate?.pending && !facilityTypeUpdate?.error?.length && isSubmitted) {
          navigate(ROUTE_URL.GYMKHANACLUB.BASE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [facilityTypeUpdate?.pending]);
    
      useEffect(() => {
        setFacilityTypeDetail((prev) => ({
          ...prev,
          ...facilityTypeUpdate?.result,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [facilityTypeUpdate?.result]);  

    const formValid = () => {
        let isValid = false;
        Object.values(facilityTypeDetail?.isError).forEach((val: string) => {
          if (val.length > 0) {
            isValid = false;
          } else {
            isValid = true;
          }
        });
    
        // NOTE: Add further validations here as AND condition
        if (nameIsValid(facilityTypeDetail.firstName).isValid) {
          isValid = true;
        } else {
          isValid = false;
        }    
        return isValid;
      };
    
      const nameIsValid = (name: string) => {
        return minimumCharValidation(3, name);
      };
    const onFormValChange = (e: any) => {
        let field: string = "";
        let value: any;
        if (e?.target && e?.target?.type === "textbox") {
          field = e?.target?.name;
          value = e?.target?.checked;
        } else {
          field = e?.target?.id;
          value = e?.target?.value;
        }
        formValChange(field, value);
      };

      const formValChange = (field: string, value: any) => {
        let errorMsg = "";
        switch (field) {
          case fieldName.firstName:
            // errorMsg = nameIsValid(value).errorMsg;
            setFacilityTypeDetail((prev: FacilityTypeFormModel) => ({
              ...prev,
              [fieldName.firstName]: value,
              isError: {
                ...prev.isError,
                [fieldName.firstName]: errorMsg,
              },
            }));
            break;
        
          default:
            break;
        }
      };

      const postUpdateFacilityTypeDetail = () => {
        let tenantId: any;
        if (id) {
          tenantId = facilityTypeDetail?.tenantId ? facilityTypeDetail?.tenantId : null;
        } else {
          tenantId = tenants?.globalSelectedTenant
            ? tenants?.globalSelectedTenant
            : null;
        }
        // const tenantId = id ? userDetail?.tenantId : tenants?.globalSelectedTenant
        const facilityTypePostData: FacilityTypeModel = {
          tenantId: tenantId ?? undefined,
          firstName: facilityTypeDetail?.firstName,
        };
       
        dispatch(updateFacilityTypeRequest(facilityTypePostData));
      };

      const onSubmit = (e: any) => {
        e.preventDefault();
        if (formValid()) {
          postUpdateFacilityTypeDetail();
        }
        setIsSubmitted(true);
      };
    return (
    <div className="facility-type-list-app">
        <div className="facility-type-list-app">
             <Card
             title={
                <>
                <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE}`}>
                <span className="icon" title="Navigate Back">
                    <i className="pi pi-fw pi-arrow-left"></i>
                  </span>
                </Link>
                </>
             }>
                <>
                <form onSubmit={onSubmit} noValidate>
                    <TabView>
                        <TabPanel  
                        leftIcon="pi pi-fw pi-briefcase me-2"
                        header="User Information">
                            <div className="m-0 mt-3">
                                <div className="row">
                                    <div className="col-sm-12 pt-3">
                                        <div className="d-flex flex-column gap-2">
                                        <label
                              htmlFor={fieldName.firstName}
                              className={
                                isError.firstName.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              First name *
                            </label>
                            <InputText
                              id={fieldName.firstName}
                              value={facilityTypeDetail?.firstName ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.firstName.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                    <div className="user-edit-footer float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={!formValid() || facilityTypeUpdate?.pending}
                    enableLoader={facilityTypeUpdate?.pending}
                  />
                </div>
                </form>
                </>
             </Card>
        </div>
    </div>
    )
    }

     export default FacilityTypeEditApp;
    
    // import { useDispatch, useSelector } from "react-redux";
    // import "./facility-type-edit.scss";
    // import { useNavigate, useParams } from "react-router";
    // import { AppState } from "../../../../../../store/reducers/root.reducer";
    // import { useEffect, useState } from "react";
    // import { IFacilityTypeFormModel, IFacilityTypeModel } from "../../../../../../interfaces/facilityType.model";
    // import { fetchFacilityTypeRequest } from "../../store/actions/facilityType.action";
    // import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
    // import { resetDeleteRole, updateRolesRequest } from "../../../../../administration/store/actions/role.action";
    // import RoleDetailApp from "../../../../../administration/role/detail/role-detail";
    
    // const FacilityTypeEditApp = () => {
    
    //     const { id } = useParams();
    //     const dispatch = useDispatch();
    //     const navigate = useNavigate();
    
    //     const facilityTypeUpdate = useSelector(
    //         (x: AppState) => x.gymkhana.facilityType.update
    //     )
    
    //     const pages = useSelector((x: AppState) => x.pages.result);
    //     const pageActions = useSelector((x: AppState) => x.actions.result);
    
    //     const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    //     const [permissionList, setPermissionList] = useState<any[]>([]);
    //     const [selectedPermissionList, setSelectedPermissionList] = useState<any[]>(
    //         []
    //     );
    
    //     const [faciliTypeDetail, setFacilityTypeDetail] = useState<IFacilityTypeFormModel>({
    //         id: "",
    //         name: "",
    //         createdDate: "",
    //         isDefault: false,
    //         isError: {
    //             name: "",
    //         },
    //         fieldName: {
    //             name: "name",
    //             isDefault: "isDefault",
    //         },
    //     });
    
    //     const { isError, fieldName } = faciliTypeDetail;
    
    //     useEffect(() => {
    //         if (id) {
    //             dispatch(fetchFacilityTypeRequest(id));
    //         }
    //         setSelectedPermissionList()
    //     })
    
    //     useEffect(() => {
    //         dispatch
    //     })
    
    //     useEffect(() => {
    //         if (!facilityTypeUpdate?.pending && !facilityTypeUpdate?.error?.length && isSubmitted) {
    //             navigate(ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE)
    //         }
    //     }, [facilityTypeUpdate?.pending]);
    
    //     useEffect(() => {
    //         if (facilityTypeUpdate?.result) {
    //             setFacilityTypeDetail((prev) => ({
    //                 ...prev, ...facilityTypeUpdate?.result
    //             }));
    //             setSelectedPermissionList(
    //                 facilityTypeUpdate?.result?.map((x) => x.actionId)
    //             )
    //         }
    //     }, [facilityTypeUpdate?.result]);
    
    //     const preparePermissionData = () => {
    //         const permissions: any[] = [];
    //         if (pages?.length) {
    //             pages.forEach((page) => {
    //                 permissions.push({
    //                     ...page,
    //                     lable: page.name,
    //                     value: page.id,
    //                     children: pageActions
    //                         ?.filter((x) => x.pageId === page.id)
    //                         ?.map((pageAction) => {
    //                             return {
    //                                 ...pageAction,
    //                                 lable: pageAction.name,
    //                                 value: pageAction.id,
    //                                 children: null,
    //                             };
    //                         }),
    //                 })
    //             })
    //         }
    //         return permissions;
    //     }
    
    //     const postUpdateFacilityTypeDetailes = () => {
    //         let roleDetailPostData = IFacilityTypeModel;
    //         if (id) {
    //             roleDetailPostData = {
    //                 id: faciliTypeDetail.id,
    //                 name: faciliTypeDetail.name,
    //                 createdDate: faciliTypeDetail.createdDate,
    //                 isDefault: faciliTypeDetail.isDefault,
    //             }
    //         } else {
    //             roleDetailPostData = {
    //                 name: faciliTypeDetail.name,
    //                 return {
    //                     actionId: x.actionId,
    //                 }
    //             }
    //         }
    //         userRole: []
    //         dispatch(updateRolesRequest(roleDetailPostData));
    //     };
    
    //     const closeError = () => {
    //         dispatch(resetDeleteRole());
    //     };
    
    //     const onSelectionChange = (selectedNodes: any[]) => {
    //         setSelectedPermissionList(selectedNodes);
    
    //         setFacilityTypeDetail((prev) => ({
    //             ...prev,
    //              roleClaims: selectedNodes.map((x) => {
    //                 return {
    //                     actionId: pageActions?.find((action) => action.id === x)?.id
    //                     roleId: faciliTypeDetail?.id,
    //                 }
    //              })
    //             }))
    //         }
    
    //         const onSubmit = (e: any) => {
    //             e.preventDefault();
    //             if(formValid()){
    //                 postUpdateFacilityTypeDetailes();
    //             }
    //             setIsSubmitted(true);
    //         };
    
    //         const formValChange = (field: string, value: any) => {
    //             switch(field) {
    //                 case fieldName.name:
    //                     setFacilityTypeDetail((prev: IFacilityTypeFormModel) => ({
    //                         ...prev,
    //                         name: value,
    //                     }))
    //                     break;
    //                 case fieldName.isDefault:
    //                     setFacilityTypeDetail((prev: IFacilityTypeFormModel) => ({
    //                         ...prev,
    //                         isDefault: value,
    //                     }))   ;
    //                     break;
    //                     default:
    //                     break; 
    //             }
    //         };
    
    //         const onFormValChange = (e: any) => {
    //             let field: string = "";
    //             let value: any;
    //             if(e?.target && e.target.type === "checkbox"){
    //                 field = e?.target?.name;
    //                 value = e?.target?.cheked;
    //             }else{
    //                 field = e?.currentTarget?.id;
    //                 value = e?.currentTarget?.value;
    //             }
    
    //             formValChange(field, value);
    //         }
    
    
    // return <>FacilityTypeEditApp</>
    //     }
    
    // export default FacilityTypeEditApp;