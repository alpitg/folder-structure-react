import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ROUTE_URL } from "./constants/routes.const";
import AuthService from "../../services/auth.service";
import { authenticateSuccess } from "../../store/actions/auth.action";
import { useDispatch } from "react-redux";

/**
 * Check the user is authorised or not.
 * @returns
 */
const AuthResolver = (props: any) => {
  const auth = AuthService.getAuthDetail();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth?.isAuthenticated) {
      navigate(ROUTE_URL.LOGIN);
    } else {
      dispatch(
        authenticateSuccess({ result: auth, error: [], pending: false })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.isAuthenticated]);

  return auth?.isAuthenticated && props.children;
};

export default AuthResolver;
