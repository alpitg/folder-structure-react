/**
 * NOTE: minimum char Validation
 */
export const minimumCharValidation = (minLength: number, userName: string) => {
  if (userName.length < minLength || userName.length === 0) {
    return {
      isValid: false,
      errorMsg: `Atleast ${minLength} characaters required`,
    };
  } else {
    return { isValid: true, errorMsg: "" };
  }
};
