import { Navigate } from "react-router";
import { ROUTE_URL } from "./constants/routes.const";
import { hasClaim } from "../../utils/auth.util";

/**
 * Check the user is authorised or not.
 * @returns
 */
const ClaimGuard = (props: { requiredClaims: string[]; children: any }) => {
  const hasRequiredClaims = hasClaim(props?.requiredClaims);
  if (!hasRequiredClaims) {
    return <Navigate to={ROUTE_URL.NOT_ALLOWED} />;
  }
  return props?.children;
};

export default ClaimGuard;
