import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
// import { IUsersRequestModel } from "../../../interfaces/user.model";
import { useDispatch } from "react-redux";
// import "./user.scss";
import CreateFarmerDetailsApp from "./create/farmer-create";
import FarmerListApp from "./list/farmer-list";

const FarmersApp = () => {
  const dispatch = useDispatch();

//   useEffect(() => {
//     const filter: IUsersRequestModel = {
//       id: "",
//       mailId: "",
//       name: "",
//     };
//     dispatch(fetchUsersRequest(filter));
//   });

  return (
    <>
      {/* <UserDetailApp />
            <UserOperationsApp />
            <UserFilterApp /> */}
      {/* <UserFilterApp /> */}
      {/* <CreateFarmerDetailsApp /> */}
      <FarmerListApp/>
      {/* <CreateFarmerDetailsApp/> */}

     <div className="row">
      <div className="col-sm-6">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </div>
      </div>
    </>
  );
};

export default FarmersApp;
