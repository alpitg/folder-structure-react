import { AuthenticationModel } from "../interfaces/auth.model";
import AuthService from "../services/auth.service";

/**
 * Check if claim is valid or not
 * @param claims - List of all claims assigned to user
 * @param requiredClaims - specific feature claims
 * @returns
 */
export const hasClaim = (requiredClaims: string[] = []) => {
  const user: AuthenticationModel = AuthService.getAuthDetail();
  if (requiredClaims?.length === 0) {
    return true;
  } else {
    return (
      requiredClaims &&
      user?.claims &&
      user?.claims?.some((claim) => requiredClaims?.includes(claim?.claimType))
    );
  }
};
