import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { InputText } from "primereact/inputtext";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserModel } from "../../../../interfaces/user.model";
import { Button } from "primereact/button";
import { updateUsersRequest } from "../../../../store/actions/users.action";

// import React, { useState } from "react";
// import { InputText } from "primereact/inputtext";

const UserEditApp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((x: AppState) => x.users);
  const [userDetail, setUserDetail] = useState<IUserModel>({
    id: "",
    name: "",
    mailId: "",
  });

  useEffect(() => {
    const temp = users.result?.find((x) => x.id === id);
    if (temp) {
      setUserDetail(temp);
    }
  }, [id]);

  const updateUserDetail = () => {
    dispatch(updateUsersRequest(userDetail));
  };

  return (
    <>
      <div className="card flex justify-content-center">
        <span className="p-float-label">
          <InputText
            id="username"
            value={userDetail?.name}
            onChange={(e) =>
              setUserDetail((prev: IUserModel) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <label htmlFor="username">Username</label>
        </span>

        <Button onClick={() => updateUserDetail()}>Update</Button>
      </div>
    </>
  );
};

export default UserEditApp;
