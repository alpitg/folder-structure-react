import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserModel } from "../../../../interfaces/user.model";

const UserDetailApp = () => {
  const { id } = useParams();
  const users = useSelector((x: AppState) => x.users);
  const [userDetail, setUserDetaiil] = useState<IUserModel>();

  useEffect(() => {
    const temp = users.result?.find((x) => x.id === id);
    setUserDetaiil(temp);
  }, [id]);

  return <>Hi From UserDetailApp {userDetail?.name}</>;
};

export default UserDetailApp;
