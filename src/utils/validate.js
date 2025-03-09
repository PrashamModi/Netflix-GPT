export const checkValidData = (email, password, isSignInForm) => {
  const responseArray = [];
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isValidEmail)
    responseArray.push({
      type: "error",
      message: "Email is not validated..",
    });
  if (responseArray.length) return responseArray;
  if (!isPasswordValid)
    responseArray.push({
      type: "error",
      message: "Password is not validated",
    });

  if (responseArray.length) return responseArray;
  return null;
};
