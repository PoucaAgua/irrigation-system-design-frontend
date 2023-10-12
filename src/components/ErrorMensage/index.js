export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://d4p7uekk73.execute-api.us-east-1.amazonaws.com/dev/api/v1/irrigation/actual/soil_params",
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      const data = await response.json();
      const errorDetails = data.detail;
      if (errorDetails && errorDetails.length > 0) {
        const errorMessage = errorDetails[0].msg;
        return errorMessage;
      } else {
        return `Erro ${response.status}`;
      }
    } else {
      return null;
    }
  } catch (error) {
    return error.message;
  }
};
