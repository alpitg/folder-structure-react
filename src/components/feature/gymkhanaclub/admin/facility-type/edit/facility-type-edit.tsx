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